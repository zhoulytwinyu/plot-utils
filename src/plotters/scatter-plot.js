export function scatterPlot(canvas, domX, domY, options) {
  let ctx = canvas.getContext("2d");
  ctx.save();
  if (options instanceof Array) {
    scatterPlot_MultiOptions(ctx, domX, domY, options);
  }
  else {
    scatterPlot_SingleOption(ctx, domX, domY, options);
  }
  ctx.restore();
}

function scatterPlot_SingleOption(ctx, domX, domY, option) {
  let plotter_LUT={"dot":drawDot,"circle":drawCircle,"square":drawSquare,"rectangle":drawRectangle};
  let plotter=plotter_LUT[option.shape];
  let opt = {radius:option.radius};
  let {fillStyle, strokeStyle,lineWidth} = option;
  if (typeof(fillStyle) !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  if (typeof(strokeStyle) !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  if (typeof(lineWidth) !== undefined) {
    ctx.lineWidth = lineWidth;
  }
  for (let i=0; i<domX.length; i++) {
    let x = domX[i];
    let y = domY[i];
    plotter(ctx,x,y,opt);
  }
  ctx.restore();
}

function scatterPlot_MultiOptions(ctx, domX, domY, options) {
  let plotter_LUT={"dot":drawDot,"circle":drawCircle,"square":drawSquare,"rectangle":drawRectangle};
  for (let i=0; i<domX.length; i++) {
    let x = domX[i];
    let y = domY[i];
    let opt = options[i];
    plotter = plotter_LUT[opt.shape];
    plotter(opt);
  }
  ctx.restore();
}

function drawDot(ctx,domX,domY,opt) {
  let {radius,fillStyle} = opt;
  ctx.beginPath();
  if (typeof(fillStyle) !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  ctx.arc(domX,domY,radius,0,2*Math.PI);
  ctx.fill();
}

function drawCircle(ctx,domX,domY,opt) {
  let {radius,strokeStyle,lineWidth} = opt;
  ctx.beginPath();
  if (typeof(strokeStyle) !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  if (typeof(lineWidth) !== undefined) {
    ctx.strokeStyle = lineWidth;
  }
  ctx.arc(domX,domY,radius,0,2*Math.PI);
  ctx.stroke(); 
}

function drawSquare(ctx,domX,domY,opt) {
  let {width,fillStyle,strokeStyle,lineWidth} = opt;
  if (typeof(fillStyle) !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  if (typeof(strokeStyle) !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  if (typeof(lineWidth) !== undefined) {
    ctx.lineWidth = lineWidth;
  }
  ctx.fillRect(domX-width/2,domY-width/2,width,width);
  ctx.strokeRect(domX-width/2,domY-width/2,width,width);
}

function drawRectangle(ctx,domX,domY,opt) {
  let {width,height,fillStyle,strokeStyle,lineWidth} = opt;
  if (typeof(fillStyle) !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  if (typeof(strokeStyle) !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  if (typeof(lineWidth) !== undefined) {
    ctx.lineWidth = lineWidth;
  }
  ctx.fillRect(domX-width/2,domY-height/2,width,height);
  ctx.strokeRect(domX-width/2,domY-height/2,width,height);
}
