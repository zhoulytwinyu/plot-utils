export function vLinePlot(ctx,domXs,startDomY,endDomY){
  ctx.beginPath();
  for (let x of domXs) {
    ctx.moveTo(x,startDomY);
    ctx.lineTo(x,endDomY);
  }
  ctx.stroke();
}
