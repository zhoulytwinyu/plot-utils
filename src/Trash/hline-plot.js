export function hLinePlot(ctx,domYs,startDomX,endDomX){
  ctx.beginPath();
  for (let y of domYs) {
    ctx.moveTo(startDomX,y);
    ctx.lineTo(endDomX,y);
  }
  ctx.stroke();
}
