export function shapePlot(canvas, domX, domY, options) {
  if (variable instanceof Array) {
    shapePlot_MultiOptions(canvas, domX, domY, options);
  }
  else {
    shapePlot_SingleOption(canvas, domX, domY, options);
  }
}

function shapePlot_SingleOption(canvas, domX, domY, option) {
  let ctx = canvas.getContext("2d");
  let plotter_LUT={"circle":drawCircle,"triangle":drawTriangle,"rectangle":drawRectangle};
  let plotter=plotter_LUT[option.shape];
  
  
  for (let i=0; i<domX.length; i++) {
    let x = domX[i];
    let y = domY[i];
    plotter(ctx,x,y)
  }
  ctx.restore();
}

function shapePlot_MultiOptions(canvas, domX, domY, options) {
  let ctx = canvas.getContext("2d");
  let plotter_LUT={"circle":drawCircle,"triangle":drawTriangle,"rectangle":drawRectangle};
  for (let i=0; i<domX.length; i++) {
    let x = domX[i];
    let y = domY[i];
    let opt = options[i];
    plotter = plotter_LUT[opt.shape];
    plotter(opt);
  }
  ctx.restore();
}

function drawCircle({radius,fillStyle,strokeStyle,lineWidth}) {
  
}

function drawTriangle({width,height,fillStyle,strokeStyle,lineWidth}) {
  
}

function drawRectangle({width,height,fillStyle,strokeStyle,lineWidth}) {
  
}
