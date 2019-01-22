import {format} from "date-fns";

export function generateAxisGrid(minX,maxX) {
  let diffX = maxX-minX;
  let level = 1000*1000*1000*1000;
  if (diffX > level || diffX<1/level) {
    return {gridPos:[],gridLabels:[]};
  }
  while (true){
    level = level/5;
    if (diffX>level) {
      break;
    }
    level = level/5;
    if (diffX>level) {
      break;
    }
    level = level/4;
    if (diffX>level) {
      break;
    }
  }
  
  let interval = level/2;
  let gridPos=[];
  for (let i=minX-minX%interval; i<maxX; i+=interval) {
    if (i >= minX) {
      gridPos.push(i);
    }
  }
  
  return {gridPos:gridPos,gridLabels:gridPos};
}

export function generateAxisDateGrid(minX,maxX) {
  let diffX = maxX-minX;
  if (diffX > 10000*365*24*60*60*1000){
    return {gridPos:[],gridLabels:[]};
  }
  if (diffX > 5000*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,2000);
  }
  if (diffX > 2500*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,1000);
  }
  if (diffX > 1000*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,500);
  }
  if (diffX > 500*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,200);
  }
  if (diffX > 250*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,100);
  }
  if (diffX > 100*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,50);
  }
  if (diffX > 50*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,20);
  }
  if (diffX > 25*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,10);
  }
  if (diffX > 10*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,5);
  }
  if (diffX > 5*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,2);
  }
  if (diffX > 2.5*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,1);
  }
  if (diffX > 365*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,6);
  }
  if (diffX > 180*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,2);
  }
  if (diffX > 60*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,1);
  }
  if (diffX > 30*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,10);
  }
  if (diffX > 10*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,5);
  }
  if (diffX > 5*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,2);
  }
  if (diffX > 2*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,1);
  }
  if (diffX > 24*60*60*1000){
    return generateAxisHourGrid(minX,maxX,12);
  }
  if (diffX > 12*60*60*1000){
    return generateAxisHourGrid(minX,maxX,6);
  }
  if (diffX > 6*60*60*1000){
    return generateAxisHourGrid(minX,maxX,3);
  }
  if (diffX > 2*60*60*1000){
    return generateAxisHourGrid(minX,maxX,1);
  }
  if (diffX > 60*60*1000){
    return generateAxisMinuteGrid(minX,maxX,30);
  }
  if (diffX > 20*60*1000){
    return generateAxisMinuteGrid(minX,maxX,10);
  }
  if (diffX > 10*60*1000){
    return generateAxisMinuteGrid(minX,maxX,5);
  }
  if (diffX > 5*60*1000){
    return generateAxisMinuteGrid(minX,maxX,2);
  }
  if (diffX > 2*60*1000){
    return generateAxisMinuteGrid(minX,maxX,1);
  }
  if (diffX > 60*1000){
    return generateAxisSecondGrid(minX,maxX,30);
  }
  if (diffX > 20*1000){
    return generateAxisSecondGrid(minX,maxX,10);
  }
  if (diffX > 10*1000){
    return generateAxisSecondGrid(minX,maxX,5);
  }
  if (diffX > 5*1000){
    return generateAxisSecondGrid(minX,maxX,2);
  }
  if (diffX > 1000){
    return generateAxisSecondGrid(minX,maxX,1);
  }
  return {gridPos:[],gridLabels:[]};
}


function generateAxisYearGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let t = new Date(minX);
  t.setHours(0,0,0,0);
  t.setMonth(0,0);
  let y = t.getFullYear();
  y=y-y%n;
  t.setFullYear(y);
  while (t.valueOf() < maxX) {
    if (t.valueOf() >= minX) {
      ret["gridPos"].push(t.valueOf());
      ret["gridLabels"].push(format(t,"YYYY"));
    }
    y+=n;
    t.setFullYear(y);
  }
  return ret;
}

function generateAxisMonthGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let t = new Date(minX);
  t.setHours(0,0,0,0);
  t.setDate(1);
  let m=t.getMonth();
  let y=t.getFullYear();
  while (t.valueOf() < maxX) {
    if (t.valueOf() >= minX) {
      ret["gridPos"].push(t.valueOf());
      ret["gridLabels"].push(format(t,"MMM"));
    }
    y=Math.floor((m+n)/12)+y;
    m=(m+n)%12;
    t.setFullYear(y,m);
  }
  return ret;
}

function generateAxisDayGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let interval = 24*60*60*1000*n;
  let t = new Date(minX);
  t.setHours(24,0,0,0);
  let tVal = t.valueOf();
  while (t < maxX) {
    if (t >= minX) {
      ret["gridPos"].push(tVal);
      ret["gridLabels"].push(format(t,"MMM,DD"));
    }
    console.log(tVal,t.toLocaleString());
    tVal+=interval;
    t.setTime(tVal);
  }
  return ret;
}

function generateAxisHourGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let interval = 60*60*1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridPos"].push(t);
      ret["gridLabels"].push(format(new Date(t),"HH:mm"));
    }
    t+=interval;
  }
  return ret;
}

function generateAxisMinuteGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let interval = 60*1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t>= minX) {
      ret["gridPos"].push(t);
      ret["gridLabels"].push(format(new Date(t),"HH:mm"));
    }
    t+=interval;
  }
  return ret;
}

function generateAxisSecondGrid(minX,maxX,n=1) {
  let ret = {gridPos:[],gridLabels:[]};
  let interval = 1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridPos"].push(t);
      ret["gridLabels"].push(format(new Date(t),"ss"));
    }
    t+=interval;
  }
  return ret;
}
