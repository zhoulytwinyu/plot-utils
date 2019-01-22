export function vLinePlot(canvas,domX,startDomY,endDomY){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  for (let x of domX) {
    ctx.moveTo(x,startDomY);
    ctx.lineTo(x,endDomY);
  }
  ctx.stroke();
}
