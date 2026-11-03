from PIL import Image
import numpy as np, sys
K=int(sys.argv[1]); mode=sys.argv[2]
src=np.array(Image.open('out/keyed.png'))
X0,X1,Y0,Y1=23,511,67,425
fw=(X1-X0+K-1)//K; fh=(Y1-Y0+K-1)//K
sheet=np.zeros((fh,fw*4,4),np.uint8)
for i in range(4):
    f=src[Y0:Y0+fh*K, i*516+X0:i*516+X0+fw*K]
    if f.shape[0]<fh*K or f.shape[1]<fw*K:
        f=np.pad(f,((0,fh*K-f.shape[0]),(0,fw*K-f.shape[1]),(0,0)))
    cells=f.reshape(fh,K,fw,K,4).transpose(0,2,1,3,4)
    cov=(cells[...,3]>0).mean(axis=(2,3))
    if mode=='nearest':
        col=f[K//2::K, K//2::K, :3]
    else:
        w=(cells[...,3]>0)[...,None]
        col=((cells[...,:3]*w).sum(axis=(2,3))/np.maximum(w.sum(axis=(2,3)),1))
    a=(cov>=0.5)
    out=np.dstack([col,a*255]).astype(np.uint8)
    # nearest-sampled opaque pixel may land on transparent px of mask -> color fallback via box
    sheet[:,i*fw:(i+1)*fw]=out
Image.fromarray(sheet,'RGBA').save(f'out/sheet_{mode}{K}.png')
print(sheet.shape)
# preview
bg=Image.new('RGBA',(sheet.shape[1],sheet.shape[0]),(40,60,90,255))
bg.alpha_composite(Image.fromarray(sheet,'RGBA'))
bg.resize((sheet.shape[1]*4,sheet.shape[0]*4),Image.NEAREST).save(f'out/prev_{mode}{K}.png')
