import {format} from "date-fns";

export function drawXAxisGridLabels(canvas,gridX,gridXLabels,toDomXCoord){
  let ctx = canvas.getContext("2d");
  for (let i=0; i<gridX.length; i++) {
    let label = gridXLabels[i];
    let domX = toDomXCoord(gridX[i]);
    ctx.fillText(label,domX,10);
  }
}

export function generateXAxisDateGrid(minX,maxX) {
  let ret = {gridX:[],gridXLabels:[]};
  let yearGrids = generateXAxisYearGrid(minX,maxX);
  ret["gridX"]=yearGrids["gridX"];
  ret["gridXLabels"]=yearGrids["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let monthGrids = generateXAxisMonthGrid(minX,maxX);
  ret["gridX"]=monthGrids["gridX"];
  ret["gridXLabels"]=monthGrids["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let tenDayGrid = generateXAxisDayGrid(minX,maxX,10);
  ret["gridX"]=tenDayGrid["gridX"];
  ret["gridXLabels"]=tenDayGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let dayGrid = generateXAxisDayGrid(minX,maxX);
  ret["gridX"]=dayGrid["gridX"];
  ret["gridXLabels"]=dayGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let sixHourGrid = generateXAxisHourGrid(minX,maxX,6);
  ret["gridX"]=sixHourGrid["gridX"];
  ret["gridXLabels"]=sixHourGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let hourGrid = generateXAxisHourGrid(minX,maxX);
  ret["gridX"]=hourGrid["gridX"];
  ret["gridXLabels"]=hourGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let tenMinuteGrid = generateXAxisMinuteGrid(minX,maxX,10);
  ret["gridX"]=tenMinuteGrid["gridX"];
  ret["gridXLabels"]=tenMinuteGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let minuteGrid = generateXAxisMinuteGrid(minX,maxX);
  ret["gridX"]=minuteGrid["gridX"];
  ret["gridXLabels"]=minuteGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let tenSecondGrid = generateXAxisSecondGrid(minX,maxX,10);
  ret["gridX"]=tenSecondGrid["gridX"];
  ret["gridXLabels"]=tenSecondGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let secondGrid = generateXAxisSecondGrid(minX,maxX);
  ret["gridX"]=secondGrid["gridX"];
  ret["gridXLabels"]=secondGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  return ret;
}


function generateXAxisYearGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let t = new Date(minX-minX%24*60*60*1000);
  t.setDate(0);
  t.setMonth(0);
  let y = t.getFullYear()
  while (t.valueOf() < maxX) {
    if (t.valueOf() >= minX) {
      ret["gridX"].push(t.valueOf());
      ret["gridLabels"].push(t.getFullYear());
    }
    y+=1;
    t.setFullYear(y);
  }
  return ret;
}

function generateXAxisMonthGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let t = new Date(minX-minX%24*60*60*1000);
  t.setDate(0);
  let m=t.getMonth();
  let y=t.getFullYear();
  while (t.valueOf() < maxX) {
    if (t.valueOf() >= minX) {
      ret["gridX"].push(t.valueOf());
      ret["gridLabels"].push(format(t,"MMM,YYYY"));
    }
    y=Math.floor((m+1)/12)+y;
    m=(m+1)%12;
    t.setMonth(m);
    t.setFullYear(y);
  }
  return ret;
}

function generateXAxisDayGrid(minX,maxX,n=1) {
  let ret = {gridX:[],gridLabels:[]};
  let interval = 24*60*60*1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY"));
    }
    t+=interval;
  }
  return ret;
}

function generateXAxisHourGrid(minX,maxX,n=1) {
  let ret = {gridX:[],gridLabels:[]};
  let interval = 60*60*1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH"));
    }
    t+=interval;
  }
  return ret;
}

function generateXAxisMinuteGrid(minX,maxX,n=1) {
  let ret = {gridX:[],gridLabels:[]};
  let interval = 60*1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t>= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH:mm"));
    }
    t+=interval;
  }
  return ret;
}

function generateXAxisSecondGrid(minX,maxX,n=1) {
  let ret = {gridX:[],gridLabels:[]};
  let interval = 1000*n;
  let t = minX-minX%interval;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH:mm:ss"));
    }
    t+=interval;
  }
  return ret;
}
