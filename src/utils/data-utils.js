import {bisect_left, bisect_right} from "./bisect";

export function filterData(x,ys,dataMin,dataMax) {
  let minInd = Math.max(bisect_left(data,minX),0);
  let maxInd = Math.min(bisect_right(data,maxX),x.length-1);
  let filteredX = x.slice(minInd,maxInd+1);
  let filteredYs = ys.map( (series)=>series.slice(minInd,maxInd+1) );
  return {filteredX,filteredYs}
}

export function convertDataToDomCoord(filteredX,filteredYs,toDomXCoord,toDomYCoord) {
  let domX = filteredX.map(toDomXCoord);
  let domYs = filteredYs.map((series)=>series.map(toDomYCoord));
  return {domX,domYs};
}
