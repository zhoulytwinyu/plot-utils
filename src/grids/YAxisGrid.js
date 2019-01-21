export function drawXAxisGridLabels(canvas,gridX,gridXLabels,toDomXCoord){
  let ctx = canvas.getContext("2d");
  for (let i=0; i<gridX.length; i++) {
    let label = gridXLabels[i];
    let domX = toDomXCoord(gridX[i]);
    ctx.fillText(label,domX,10);
  }
}

export function generateYAxisGrid(minX,maxX) {
  
}
