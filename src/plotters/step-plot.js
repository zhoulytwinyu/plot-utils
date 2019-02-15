export function stepLinePlot(canvas,domXs,domYs){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(domXs[0],domYs[0]);
  for (let i=1; i<domXs.length; i++) {
    ctx.lineTo(domXs[i],domYs[i-1]);
    ctx.lineTo(domXs[i],domYs[i]);
  }
  ctx.stroke();
}

export function stepFillPlot(canvas,domXs,domYs,YOrigin){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(domXs[0],YOrigin);
  ctx.lineTo(domXs[0],domYs[0]);
  for (let i=1; i<domXs.length; i++) {
    if (Math.abs(domXs[i-1]-domXs[i])>1
        || Math.abs(domYs[i-1]-domYs[i]>1)) {
      ctx.lineTo(domXs[i],domYs[i-1]);
      ctx.lineTo(domXs[i],domYs[i]);
    }
  }
  ctx.lineTo(domXs[domXs.length-1],YOrigin);
  ctx.closePath();
  ctx.fill();
}
