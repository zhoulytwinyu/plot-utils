export function getLinearXCoordinateConverter(plotWidth,minX,maxX) {
  let dataXPxScale = (maxX-minX)/plotWidth;
  let toDomXCoord = function(t){
    return (t-minX)/dataXPxScale;
  };
  let fromDomXCoord = function(x){
    return x*dataXPxScale+minX;
  }
  return {toDomXCoord,fromDomXCoord};
}

export function getLinearYCoordinateConverter(plotHeight,minY,maxY) {
  let dataYPxScale = (maxY-minY)/plotHeight;
  let toDomYCoord = function(dataY){
    return plotHeight-(dataY-minY)/dataYPxScale;
  };
  let fromDomYCoord = function(domY){
    return (plotHeight-domY)*dataYPxScale+minY;
  }
  return {toDomYCoord,fromDomYCoord};
}
