import {bisect_left, bisect_right} from "bisect";

export function filterDataPoint_columnsIndexed(data,colName,minX,maxX) {
  let minInd = Math.max(bisect_left(data[colName],minX),0);
  let maxInd = Math.min(bisect_right(data[colName],maxX),data[colName].length-1);
  
  let ret = {};
  for (let key of data) {
    ret[key] = data[key].slice(minInd,maxInd+1);
  }
  return ret;
}

export function filterDataRange_columnsIndexed(data,startColName,endColName,minX,maxX) {
  let minInd = Math.max(bisect_left(data[startColName],minX),0);
  let maxInd = Math.min(bisect_right(data[endColName],maxX),data[colName].length-1);
  
  let ret = {};
  for (let key of data) {
    ret[key] = data[key].slice(minInd,maxInd+1);
  }
  return ret;
}
