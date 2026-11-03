from PIL import Image
import numpy as np, sys
from scipy import ndimage as ndi
im=np.array(Image.open('ais-1.png').convert('RGB')).astype(float)
R,G,B=im[...,0],im[...,1],im[...,2]
m=np.minimum(R,B)-G
alpha=np.clip(1-(m-70)/(150-70),0,1)
# despill: pull blue/red toward green-ish where tinted
spill=np.clip((m-0)/120,0,1)
Bn=B-(B-np.maximum(G,R*0.55))*spill*0.0
mask=alpha>0.5
# remove tiny specks, then erode 1px to kill fringe
mask=ndi.binary_opening(mask,iterations=1)
mask=ndi.binary_erosion(mask,iterations=1)
lab,n=ndi.label(ndi.binary_dilation(mask,iterations=3))
sizes=ndi.sum(mask,lab,range(1,n+1))
keep=np.zeros_like(mask)
for i,s in enumerate(sizes,1):
    if s>=12: keep|=(lab==i)&mask
mask=keep
# despill colour: for remaining pixels with magenta tint, reduce toward clean
out=im.copy()
t=np.clip(m/60,0,1)[...,None]
gray=np.stack([G,G,G],-1)
# replace tinted edge colours by neighbours' mean of clean pixels
clean=mask&(m<20)
idx=ndi.distance_transform_edt(~clean,return_distances=False,return_indices=True)
near=im[idx[0],idx[1]]
tint=mask&(m>=20)
out[tint]=near[tint]
rgba=np.dstack([out,mask*255]).astype(np.uint8)
Image.fromarray(rgba,'RGBA').save('out/keyed.png')
W=im.shape[1]//4
ys,xs=np.where(mask)
print('bbox',xs.min(),xs.max(),ys.min(),ys.max())
