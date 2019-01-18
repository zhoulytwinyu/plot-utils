import {applyStyles} from "../utils/canvas-utils";

export function stepLinePlot_single(canvas,domX,domY,style){
  let ctx = canvas.getContext("2d");
  ctx.save()
  applyStyles(ctx,style);
  ctx.beginPath();
  ctx.moveTo(domX[0],domY[0]);
  for (let i=1; i<domX.length; i++) {
    ctx.lineTo(domX[i],domY[i-1]);
    ctx.lineTo(domX[i],domY[i]);
  }
  ctx.stroke();
  ctx.restore();
}

export function stepFillPlot_single(canvas,domX,domY,YOrigin,style){
  let ctx = canvas.getContext("2d");
  ctx.save()
  applyStyles(ctx,style);
  ctx.beginPath();
  ctx.moveTo(domX[0],YOrigin);
  ctx.lineTo(domX[0],domY[0]);
  for (let i=1; i<domX.length; i++) {
    if (Math.abs(domX[i-1]-domX[i])>1
        || Math.abs(domY[i-1]-domY[i]>1)) {
      ctx.lineTo(domX[i],domY[i-1]);
      ctx.lineTo(domX[i],domY[i]);
    }
  }
  ctx.lineTo(domX[domX.length-1],YOrigin);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

