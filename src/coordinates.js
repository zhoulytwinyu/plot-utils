export function toDomXCoord_Linear(width,minX,maxX,dataX){
  return (dataX-minX)/((maxX-minX)/width);
}

export function fromDomXCoord_Linear(width,minX,maxX,domX){
  return domX*((maxX-minX)/width) + minX;
}

export function toDomYCoord_Linear(height,minY,maxY,dataY){
  return height-(dataY-minY)/((maxY-minY)/height);
}

export function fromDomYCoord_Linear(height,minY,maxY,domY){
  return (height-domY)*((maxY-minY)/height) + minY;
}

export function toDomCoord_Categorical(name,
                                       posLUT, // {categoryName: {start,end}}
                                       rowHeight,
                                       type="middle") {
  switch (type) {
    case "start":
      return posLUT[name].start*rowHeight;
    case "middle":
      return (posLUT[name].start+posLUT[name].end)*rowHeight/2;
    case "end":
      return posLUT[name].end*rowHeight;;
    default:
      throw new Error("UserTooStupidError");
  }
}
