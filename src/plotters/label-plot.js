export function labelPlot(canvas, domX, domY, labels, textAlign="center", textBaseline="middle", rotation=0) {
  let ctx = canvas.getContext("2d");
  ctx.save();
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  for (let i=0; i<labels.length; i++) {
    let x = domX[i];
    let y = domY[i];
    let lab = labels[i];
    ctx.translate(x,y);
    ctx.rotate(rotation);
    ctx.fillText(lab,0,0);
    ctx.rotate(-rotation);
    ctx.translate(-x,-y);
  }
  ctx.restore();
}
