export function linePlot(canvas,domX,domY){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(domX[0],domY[0]);
  for (let i=1; i<domX.length; i++) {
    ctx.lineTo(domX[i],domY[i]);
  }
  ctx.stroke();
}
