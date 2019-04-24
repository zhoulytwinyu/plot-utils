export function stepLinePlot(ctx,domXs,domYs){
  if (domXs.length===0) {
    return;
  }
  ctx.beginPath();
  let prevY = null;
  let x = Math.ceil(domXs[0])-0.5;
  let y = Math.ceil(domYs[0])-0.5;
  ctx.moveTo(x,y);
  prevY = y;
  for (let i=0; i<domXs.length; i++) {
    x = Math.ceil(domXs[i])-0.5;
    y = Math.ceil(domYs[i])-0.5;
    ctx.lineTo(x,prevY);
    ctx.lineTo(x,y);
    prevY = y;
  }
  ctx.stroke();
}

export function stepFillPlot(ctx,domXs,domYs,YOrigin){
  if (domXs.length===0) {
    return;
  }
  ctx.beginPath();
  let prevY = Math.ceil(YOrigin)-0.5;
  let x = Math.ceil(domXs[0])-0.5;
  let y = Math.ceil(domYs[0])-0.5;
  ctx.moveTo(x,prevY);
  ctx.lineTo(x,y);
  prevY = y;
  for (let i=0; i<domXs.length; i++) {
    x = Math.ceil(domXs[i])-0.5;
    y = Math.ceil(domYs[i])-0.5;
    ctx.lineTo(x,prevY);
    ctx.lineTo(x,y);
    prevY = y;
  }
  ctx.lineTo(x,Math.ceil(YOrigin)-0.5);
  ctx.closePath();
  ctx.fill();
}
