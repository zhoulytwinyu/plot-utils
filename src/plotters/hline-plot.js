export function hLinePlot(canvas,domY,startDomX,endDomX){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  for (let y of domY) {
    ctx.moveTo(startDomX,y);
    ctx.lineTo(endDomX,y);
  }
  ctx.stroke();
}
