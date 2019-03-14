export function bitmapScatterPlot(ctx, domXs, domYs, bitmaps, position=4) {
  let x = null;
  let y = null;
  let bitmap = null; 
  for (let i=0; i<domXs.length; i++) {
    bitmap = bitmaps[i];
    x = adjustDomX(domXs[i],bitmap.width,position);
    y = adjustDomY(domYs[i],bitmap.height,position);
    ctx.drawImage(bitmap,x,y);
  }
}

function adjustDomX(domX,bitmapWidth,position) {
  let ret = null;
  switch (position) {
    case 0:
    case 3:
    case 6:
      ret = domX;
      break;
    case 1:
    case 4:
    case 7:
      ret = domX-bitmapWidth/2;
      break;
    case 2:
    case 5:
    case 8:
      ret = domX-bitmapWidth;
      break;
    default:
      throw new Error("ProgrammerTooStupidError");
  }
  return ret;
}

function adjustDomY(domY,bitmapHeight,position) {
  let ret = null;
  switch (position) {
    case 0:
    case 1:
    case 2:
      ret = domY;
      break;
    case 3:
    case 4:
    case 5:
      ret = domY-bitmapHeight/2;
      break;
    case 6:
    case 7:
    case 8:
      ret = domY-bitmapHeight;
      break;
    default:
      throw new Error("ProgrammerTooStupidError");
  }
  return ret;
}
