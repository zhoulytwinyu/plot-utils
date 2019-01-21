import {format} from "date-fns";

export function drawYAxisGridLabels(canvas,gridY,gridYLabels,toDomYCoord) {
  let ctx = canvas.getContext("2d");
  ctx.save();
  ctx.translate(canvas.width,0);
  ctx.rotate(Math.PI/2);
  ctx.fillStyle = "red";
  ctx.fillStyle = "blue";
  ctx.textAlign="center";
  for (let i=0; i<gridY.length; i++) {
    let label = gridYLabels[i];
    let domY = toDomYCoord(gridY[i]);
    ctx.beginPath();
    ctx.moveTo(domY,0);
    ctx.lineTo(domY,5);
    ctx.stroke();
    ctx.fillText(label,domY,20);
  }
  ctx.restore();
}

export function drawXAxisGridLabels(canvas,gridX,gridLabels,toDomXCoord) {
  let ctx = canvas.getContext("2d");
  ctx.save();
  ctx.textAlign="center";
  for (let i=0; i<gridX.length; i++) {
    let label = gridLabels[i];
    let domX = toDomXCoord(gridX[i]);
    ctx.beginPath();
    ctx.moveTo(domX,0);
    ctx.lineTo(domX,5);
    ctx.stroke();
    ctx.fillText(label,domX,20);
  }
  ctx.restore();
}

export function generateAxisGrid(minX,maxX) {
  return {gridPos:[100,200],gridLabels:[minX,maxX]};
}

export function generateAxisDateGrid(minX,maxX) {
  if (maxX - minX > 10000*365*24*60*60*1000){
    return {gridPos:[],gridLabels:[]};
  }
  if (maxX - minX > 5000*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,2000);
  }
  if (maxX - minX > 2500*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,1000);
  }
  if (maxX - minX > 1000*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,500);
  }
  if (maxX - minX > 500*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,200);
  }
  if (maxX - minX > 250*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,100);
  }
  if (maxX - minX > 100*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,50);
  }
  if (maxX - minX > 50*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,20);
  }
  if (maxX - minX > 25*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,10);
  }
  if (maxX - minX > 10*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,5);
  }
  if (maxX - minX > 5*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,2);
  }
  if (maxX - minX > 2.5*365*24*60*60*1000){
    return generateAxisYearGrid(minX,maxX,1);
  }
  if (maxX - minX > 365*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,6);
  }
  if (maxX - minX > 180*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,2);
  }
  if (maxX - minX > 60*24*60*60*1000){
    return generateAxisMonthGrid(minX,maxX,1);
  }
  if (maxX - minX > 30*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,10);
  }
  if (maxX - minX > 10*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,5);
  }
  if (maxX - minX > 5*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,2);
  }
  if (maxX - minX > 2*24*60*60*1000){
    return generateAxisDayGrid(minX,maxX,1);
  }
  if (maxX - minX > 24*60*60*1000){
    return generateAxisHourGrid(minX,maxX,12);
  }
  if (maxX - minX > 12*60*60*1000){
    return generateAxisHourGrid(minX,maxX,6);
  }
  if (maxX - minX > 6*60*60*1000){
    return generateAxisHourGrid(minX,maxX,3);
  }
  if (maxX - minX > 2*60*60*1000){
    return generateAxisHourGrid(minX,maxX,1);
  }
  if (maxX - minX > 60*60*1000){
    return generateAxisMinuteGrid(minX,maxX,30);
  }
  if (maxX - minX > 20*60*1000){
    return generateAxisMinuteGrid(minX,maxX,10);
  }
  if (maxX - minX > 10*60*1000){
    return generateAxisMinuteGrid(minX,maxX,5);
  }
  if (maxX - minX > 5*60*1000){
    return generateAxisMinuteGrid(minX,maxX,2);
  }
  if (maxX - minX > 2*60*1000){
    return generateAxisMinuteGrid(minX,maxX,1);
  }
  if (maxX - minX > 60*1000){
    return generateAxisSecondGrid(minX,maxX,30);
  }
  if (maxX - minX > 20*1000){
    return generateAxisSecondGrid(minX,maxX,10);
  }
  if (maxX - minX > 10*1000){
    return generateAxisSecondGrid(minX,maxX,5);
  }
  if (maxX - minX > 5*1000){
    return generateAxisSecondGrid(minX,maxX,2);
  }
  if (maxX - minX > 1000){
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
