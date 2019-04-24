export function linePlot(ctx,domXs,domYs){
  ctx.beginPath();
  ctx.moveTo(domX[0],domY[0]);
  for (let i=1; i<domXs.length; i++) {
    ctx.lineTo(domXs[i],domYs[i]);
  }
  ctx.stroke();
}
