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
  let dayGrid = generateXAxisDayGrid(minX,maxX);
  ret["gridX"]=dayGrid["gridX"];
  ret["gridXLabels"]=dayGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let hourGrid = generateXAxisHourGrid(minX,maxX);
  ret["gridX"]=hourGrid["gridX"];
  ret["gridXLabels"]=hourGrid["gridLabels"];
  if (ret["gridX"].length>=3) {
    return ret;
  }
  let minuteGrid = generateXAxisMinuteGrid(minX,maxX);
  ret["gridX"]=minuteGrid["gridX"];
  ret["gridXLabels"]=minuteGrid["gridLabels"];
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
      ret["gridLabels"].push(format("MMM,YYYY"));
    }
    y=Math.floor((m+1)/12)+y;
    m=(m+1)%12;
    t.setMonth(m);
    t.setFullYear(y);
  }
  return ret;
}

function generateXAxisDayGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let interval = 24*60*60*1000;
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

function generateXAxisHourGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let t = minX-minX%60*60*1000;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH"));
    }
    t+=60*60*1000;
  }
  return ret;
}

function generateXAxisMinuteGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let t = minX-minX%60*1000;
  while (t < maxX) {
    if (t>= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH:mm"));
    }
    t+=60*1000;
  }
  return ret;
}

function generateXAxisSecondGrid(minX,maxX) {
  let ret = {gridX:[],gridLabels:[]};
  let t = minX-minX%1000;
  while (t < maxX) {
    if (t >= minX) {
      ret["gridX"].push(t);
      ret["gridLabels"].push(format(new Date(t),"MMM,DD,YYYY HH:mm:ss"));
    }
    t+=1000;
  }
  return ret;
}
