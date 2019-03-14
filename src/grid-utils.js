export function generateDateGrids(minX,maxX,rangeMinX,rangeMaxX) {
  let grids;
  let validFromDiffX, validToDiffX;
  let diffX = maxX-minX;
  if (diffX > 8000*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,2000);
    validFromDiffX = 8000*365*24*60*60*1000;
    validToDiffX = Infinity;
  }
  else if (diffX > 4000*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,1000);
    validFromDiffX = 4000*365*24*60*60*1000;
    validToDiffX = 8000*365*24*60*60*1000;
  }
  else if (diffX > 2000*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,500);
    validFromDiffX = 2000*365*24*60*60*1000;
    validToDiffX = 4000*365*24*60*60*1000;
  }
  else if (diffX > 1000*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,250);
    validFromDiffX = 1000*365*24*60*60*1000;
    validToDiffX = 2000*365*24*60*60*1000
  }
  else if (diffX > 500*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,100);
    validFromDiffX = 500*365*24*60*60*1000;
    validToDiffX = 1000*365*24*60*60*1000;
  }
  else if (diffX > 250*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,50);
    validFromDiffX = 250*365*24*60*60*1000;
    validToDiffX = 500*365*24*60*60*1000;
  }
  else if (diffX > 100*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,25);
    validFromDiffX = 100*365*24*60*60*1000;
    validToDiffX = 250*365*24*60*60*1000;
  }
  else if (diffX > 50*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,10);
    validFromDiffX = 50*365*24*60*60*1000;
    validToDiffX = 100*365*24*60*60*1000;
  }
  else if (diffX > 25*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,5);
    validFromDiffX = 25*365*24*60*60*1000;
    validToDiffX = 50*365*24*60*60*1000;
  }
  else if (diffX > 10*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,3);
    validFromDiffX = 10*365*24*60*60*1000;
    validToDiffX = 25*365*24*60*60*1000;
  }
  else if (diffX > 5*365*24*60*60*1000){
    grids = generateYearGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 5*365*24*60*60*1000;
    validToDiffX = 10*365*24*60*60*1000;
  }
  else if (diffX > 2.5*365*24*60*60*1000){
    grids = generateMonthGrids(rangeMinX,rangeMaxX,6);
    validFromDiffX = 2.5*365*24*60*60*1000;
    validToDiffX = 5*365*24*60*60*1000;
  }
  else if (diffX > 1*365*24*60*60*1000){
    grids = generateMonthGrids(rangeMinX,rangeMaxX,3);
    validFromDiffX = 1*365*24*60*60*1000;
    validToDiffX = 2.5*365*24*60*60*1000;
  }
  else if (diffX > 180*24*60*60*1000){
    grids = generateMonthGrids(rangeMinX,rangeMaxX,2);
    validFromDiffX = 180*24*60*60*1000;
    validToDiffX = 1*365*24*60*60*1000;
  }
  else if (diffX > 90*24*60*60*1000){
    grids = generateMonthGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 90*24*60*60*1000;
    validToDiffX = 180*24*60*60*1000;
  }
  else if (diffX > 45*24*60*60*1000){
    grids = generateDayGrids(rangeMinX,rangeMaxX,14);
    validFromDiffX = 45*24*60*60*1000;
    validToDiffX = 90*24*60*60*1000;
  }
  else if (diffX > 20*24*60*60*1000){
    grids = generateDayGrids(rangeMinX,rangeMaxX,7);
    validFromDiffX = 20*24*60*60*1000;
    validToDiffX = 45*24*60*60*1000;
  }
  else if (diffX > 10*24*60*60*1000){
    grids = generateDayGrids(rangeMinX,rangeMaxX,3);
    validFromDiffX = 10*24*60*60*1000;
    validToDiffX = 20*24*60*60*1000;
  }
  else if (diffX > 5*24*60*60*1000){
    grids = generateDayGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 5*24*60*60*1000;
    validToDiffX = 10*24*60*60*1000;
  }
  else if (diffX > 2.5*24*60*60*1000){
    grids = generateHourGrids(rangeMinX,rangeMaxX,12);
    validFromDiffX = 2.5*24*60*60*1000;
    validToDiffX = 5*24*60*60*1000;
  }
  else if (diffX > 24*60*60*1000){
    grids = generateHourGrids(rangeMinX,rangeMaxX,6);
    validFromDiffX = 24*60*60*1000;
    validToDiffX = 2.5*24*60*60*1000;
  }
  else if (diffX > 12*60*60*1000){
    grids = generateHourGrids(rangeMinX,rangeMaxX,3);
    validFromDiffX = 12*60*60*1000;
    validToDiffX = 24*60*60*1000;
  }
  else if (diffX > 6*60*60*1000){
    grids = generateHourGrids(rangeMinX,rangeMaxX,2);
    validFromDiffX = 6*60*60*1000;
    validToDiffX = 12*60*60*1000;
  }
  else if (diffX > 3*60*60*1000){
    grids = generateHourGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 3*60*60*1000;
    validToDiffX = 6*60*60*1000;
  }
  else if (diffX > 2*60*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,30);
    validFromDiffX = 2*60*60*1000;
    validToDiffX = 3*60*60*1000;
  }
  else if (diffX > 60*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,15);
    validFromDiffX = 60*60*1000;
    validToDiffX = 2*60*60*1000;
  }
  else if (diffX > 30*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,10);
    validFromDiffX = 30*60*1000;
    validToDiffX = 60*60*1000;
  }
  else if (diffX > 20*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,5);
    validFromDiffX = 20*60*1000;
    validToDiffX = 30*60*1000;
  }
  else if (diffX > 10*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,2);
    validFromDiffX = 10*60*1000;
    validToDiffX = 20*60*1000;
  }
  else if (diffX > 5*60*1000){
    grids = generateMinuteGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 5*60*1000;
    validToDiffX = 10*60*1000;
  }
  else if (diffX > 2.5*60*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,30);
    validFromDiffX = 2.5*60*1000;
    validToDiffX = 5*60*1000;
  }
  else if (diffX > 60*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,15);
    validFromDiffX = 60*1000;
    validToDiffX = 2.5*60*1000;
  }
  else if (diffX > 30*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,10);
    validFromDiffX = 30*1000;
    validToDiffX = 60*1000;
  }
  else if (diffX > 15*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,5);
    validFromDiffX = 15*1000;
    validToDiffX = 30*1000;
  }
  else if (diffX > 10*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,2.5);
    validFromDiffX = 10*1000;
    validToDiffX = 15*1000;
  }
  else if (diffX > 5*1000){
    grids = generateSecondGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 5*1000;
    validToDiffX = 10*1000;
  }
  else if (diffX > 2.5*1000){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,500);
    validFromDiffX = 2.5*1000;
    validToDiffX = 5*1000;
  }
  else if (diffX > 1000){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,250);
    validFromDiffX = 1000;
    validToDiffX = 2.5*1000;
  }
  else if (diffX > 500){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,100);
    validFromDiffX = 500;
    validToDiffX = 1000;
  }
  else if (diffX > 250){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,50);
    validFromDiffX = 250;
    validToDiffX = 500;
  }
  else if (diffX > 100){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,25);
    validFromDiffX = 100;
    validToDiffX = 250;
  }
  else if (diffX > 50){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,10);
    validFromDiffX = 500;
    validToDiffX = 100;
  }
  else if (diffX > 25){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,5);
    validFromDiffX = 25;
    validToDiffX = 50;
  }
  else if (diffX > 10){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,3);
    validFromDiffX = 10;
    validToDiffX = 25;
  }
  else if (diffX > 5){
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 5;
    validToDiffX = 10;
  }
  else {
    grids = generateMilliSecondGrids(rangeMinX,rangeMaxX,1);
    validFromDiffX = 0;
    validToDiffX = 5;
  }
  return {grids,validFromDiffX,validToDiffX};
}

function generateYearGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let t = new Date(rangeMinX);
  t.setHours(0,0,0,0);
  t.setMonth(0,0);
  let y = t.getFullYear();
  y = y - y%n;
  t.setFullYear(y);
  while (t.valueOf() < rangeMaxX) {
    if (t.valueOf() >= rangeMinX) {
      ret.push(t.valueOf());
    }
    y+=n;
    t.setFullYear(y);
  }
  return ret;
}

function generateMonthGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let t = new Date(rangeMinX);
  t.setHours(0,0,0,0);
  t.setDate(1);
  let m=t.getMonth();
  let y=t.getFullYear();
  while (t.valueOf() < rangeMaxX) {
    if (t.valueOf() >= rangeMinX) {
      ret.push(t.valueOf());
    }
    m+=n;
    t.setFullYear(y,m);
    if (t.getFullYear() !== y){
      t.setMonth(0);
      m = t.getMonth();
      y = t.getFullYear();
    }
  }
  return ret;
}

function generateDayGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let t = new Date(rangeMinX);
  t.setHours(0,0,0,0);
  t.setDate(1);
  let d=t.getDate();
  let m=t.getMonth();
  let y=t.getFullYear();
  while (t < rangeMaxX) {
    if (t >= rangeMinX) {
      ret.push(t.valueOf());
    }
    d+=n;
    t.setFullYear(y,m,d);
    if (t.getMonth() !== m || t.getFullYear() !== y){
      t.setDate(1);
      y = t.getFullYear();
      m = t.getMonth();
      d = t.getDate();
      if (t-ret[ret.length-1] < n/2*24*60*60*1000) {
        ret.pop();
      }
    }
  }
  return ret;
}

function generateHourGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let interval = 60*60*1000*n;
  let t = rangeMinX-rangeMinX%interval;
  while (t < rangeMaxX) {
    if (t >= rangeMinX) {
      ret.push(t);
    }
    t+=interval;
  }
  return ret;
}

function generateMinuteGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let interval = 60*1000*n;
  let t = rangeMinX-rangeMinX%interval;
  while (t < rangeMaxX) {
    if (t>= rangeMinX) {
      ret.push(t);
    }
    t+=interval;
  }
  return ret;
}

function generateSecondGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let interval = 1000*n;
  let t = rangeMinX-rangeMinX%interval;
  while (t < rangeMaxX) {
    if (t >= rangeMinX) {
      ret.push(t);
    }
    t+=interval;
  }
  return ret;
}

function generateMilliSecondGrids(rangeMinX,rangeMaxX,n=1) {
  let ret = [];
  let interval = n;
  let t = rangeMinX-rangeMinX%interval;
  while (t < rangeMaxX) {
    if (t >= rangeMinX) {
      ret.push(t);
    }
    t+=interval;
  }
  return ret;
}
