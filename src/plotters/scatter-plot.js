export function scatterPlot(canvas, domX, domY, shape='.', size=1) {
  let ctx = canvas.getContext("2d");
  let draw = drawDot;
  for (let i=0; i<domX.length; i++) {
    let x = domX[i];
    let y = domY[i];
    draw(ctx,x,y,size)
  }
  ctx.restore();
}

function drawPlus() {
  
}

function drawCross() {
  
}

function drawDot(ctx,x,y,size) {
  ctx.fillRect(x-Math.floor(size/2),y-Math.floor(size/2),size,size);
}

function drawCircle() {
  
}

function drawTriangle() {
  
}

function drawRectangle() {
  
}
