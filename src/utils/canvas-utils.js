export function applyStyles(ctx, styleObj) {
  if ("fillStyle" in styleObj) {
    ctx.fillStyle = styleObj.fillStyle;
  }
  if ("strokeStyle" in styleObj) {
    ctx.strokeStyle = styleObj.strokeStyle;
  }
  if ("lineWidth" in styleObj) {
    ctx.lineWidth = stylesObj.lineWidth;
  }
}

export function drawAxisBorder(canvas,left,bottom,right,top) {
  let ctx = canvas.getContext("2d");
  ctx.save();
  if (left===true) {
    ctx.beginPath();
    ctx.moveTo(1,0);
    ctx.lineTo(1,canvas.height);
    ctx.stroke();
  }
  if (bottom===true) {
    ctx.beginPath();
    ctx.moveTo(0,canvas.height-1);
    ctx.lineTo(canvas.width,canvas.height-1);
    ctx.stroke();
  }
  if (right===true) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.stroke();
  }
  if (top===true) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.stroke();
  }
  if (xOri===true) {
    plotObj.toDomXCoord(0)
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.stroke();
  }
  if (yOri===true) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.stroke();
  }
  
  ctx.restore();
}

export function drawXAxisOrigin(canvas,toDomXCoord) {
  let ctx = canvas.getContext("2d");
  let domX = toDomXCoord(0);
  if (domX < 0 || domX > canvas.width) {
    return;
  }
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(domX,0);
  ctx.lineTo(domX,canvas.height);
  ctx.stroke();
  ctx.restore();
}

export function drawYAxisOrigin(canvas,toDomYCoord) {
  let ctx = canvas.getContext("2d");
  let domY = toDomYCoord(0);
  if (domY < 0 || domY > canvas.height) {
    return;
  }
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0,domY);
  ctx.lineTo(canvas.width,domY);
  ctx.stroke();
  ctx.restore();
}
