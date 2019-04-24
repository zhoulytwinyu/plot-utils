"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepLinePlot = stepLinePlot;
exports.stepFillPlot = stepFillPlot;
function stepLinePlot(ctx, domXs, domYs) {
  if (domXs.length === 0) {
    return;
  }
  ctx.beginPath();
  var prevY = null;
  var x = Math.ceil(domXs[0]) - 0.5;
  var y = Math.ceil(domYs[0]) - 0.5;
  ctx.moveTo(x, y);
  prevY = y;
  for (var i = 0; i < domXs.length; i++) {
    x = Math.ceil(domXs[i]) - 0.5;
    y = Math.ceil(domYs[i]) - 0.5;
    ctx.lineTo(x, prevY);
    ctx.lineTo(x, y);
    prevY = y;
  }
  ctx.stroke();
}

function stepFillPlot(ctx, domXs, domYs, YOrigin) {
  if (domXs.length === 0) {
    return;
  }
  ctx.beginPath();
  var prevY = Math.ceil(YOrigin) - 0.5;
  var x = Math.ceil(domXs[0]) - 0.5;
  var y = Math.ceil(domYs[0]) - 0.5;
  ctx.moveTo(x, prevY);
  ctx.lineTo(x, y);
  prevY = y;
  for (var i = 0; i < domXs.length; i++) {
    x = Math.ceil(domXs[i]) - 0.5;
    y = Math.ceil(domYs[i]) - 0.5;
    ctx.lineTo(x, prevY);
    ctx.lineTo(x, y);
    prevY = y;
  }
  ctx.lineTo(x, Math.ceil(YOrigin) - 0.5);
  ctx.closePath();
  ctx.fill();
}