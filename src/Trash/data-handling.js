import {bisect_left, bisect_right} from "bisect";

export function bisectFilterDataPoint_columnsIndexed(data,colName,minX,maxX) {
  let minInd = Math.max(bisect_left(data[colName],minX),0);
  let maxInd = Math.min(bisect_right(data[colName],maxX),data[colName].length-1);
  
  let ret = {};
  for (let [key,values] of Object.entries(data)) {
    ret[key] = values.slice(minInd,maxInd+1);
  }
  return ret;
}

export function bisectFilterDataRange_columnsIndexed(data,startColName,endColName,minX,maxX) {
  let minInd = Math.max(bisect_right(data[endColName],minX),0);
  let maxInd = Math.min(bisect_left(data[startColName],maxX),data[startColName].length-1);
  
  let ret = {};
  for (let [key,values] of Object.entries(data)) {
    ret[key] = values.slice(minInd,maxInd+1);
  }
  return ret;
}

export function rowIndexedToColumnIndexed(data,columns) {
  let ret = {};
  for (let c of columns) {
    ret[c]=data.map((row)=>row[c]);
  }
  return ret;
}

export function columnIndexedToRowIndexed(data,columns) {
  let length = 0;
  for (let c of columns) {
    if (!data[c]){
      continue;
    }
    else {
      length = Math.max(length,data[c].length);
    }
  }
  let ret = [];
  for (let i=0; i<length; i++) {
    ret[i] = {};
    for (let c of columns){
      ret[i][c] = data[c][i];
    }
  }
  return ret;
}
