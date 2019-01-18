function addPlotEventHandlers(canvas,handlers){
  for (let evName in handlers) {
    for (let handler of handlers[evName]) {
      canvas.addEventListener(evName,handler);
    }
  }

  return function removePlotEventHandlers(){
    for (let evName in handlers_LUT) {
      for (let handler in handlers_LUT[evName]) {
        canvas.removeEventListener(evName,handler);
      }
    }
  };
}

function createHighlightEventHandler(plotObj,callbacks=[]) {
  if (!callbacks) {
    return function (ev) {};
  }
  let {highlightCanvas, domX} = plotObj;
  let ctx = highlightCanvas.getContext("2d");
  let lastIndex = null;
  return function (ev) {
    let curDomX = ev.layerX;
    let ind_left = bisect_left(domX,curDomX);
    let ind_right = ind_left+1;
    if (ind_left === -1) {
      ev["index"] = ind_right;
    }
    else if (ind_right === domX.length) {
      ev["index"] = ind_left;
    }
    else {
      if (Math.abs(curDomX-domX[ind_left])<=Math.abs(domX[ind_right]-curDomX)) {
        ev["index"] = ind_left;
      }
      else {
        ev["index"] = ind_right;
      }
    }
    if (ev["index"]!==lastIndex) {
      lastIndex = ev["index"];
      // callback
      for (let callback of callbacks) {
        callback(ev);
      }
    }
  };
}

function createMousemoveEventHandler(callbacks=[]) {
  if (!callbacks) {
    return function (ev) {};
  }
  return function (ev) {
    // callback
    for (let callback of callbacks) {
      callback(ev);
    }
  };
}

function createDragEventHandler(plotObj,dragCallbacks=[],mouseupCallbacks=[]) {
  let initDomX = null;
  let initDataX = null;
  let initDomY = null;
  let initDataY = null;
  
  function dragMouseDown(e) {
    e.preventDefault();
    initDomX = e.layerX;
    initDomY = e.layerY;
    initDataX = plotObj.fromDomXCoord(e.clientX);
    initDataY = plotObj.fromDomYCoord(e.clientY);
    
    document.addEventListener("mouseup",closeDragElement);
    document.addEventListener("mousemove",dragElement);
  }

  function dragElement(e) {
    //~ e.preventDefault();
    e.initDomX = initDomX;
    e.initDataX = initDataX;
    e.initDomY = initDomY;
    e.initDataY = initDataY;
    e.curDomX = e.layerX;
    e.curDomY = e.layerY;
    e.curDataX = plotObj.fromDomXCoord(e.clientX);
    e.curDataY = plotObj.fromDomYCoord(e.clientX);
    for (let dragCallback of dragCallbacks) {
      dragCallback(e);
    }
  }

  function closeDragElement(e) {
    document.removeEventListener("mouseup",closeDragElement);
    document.removeEventListener("mousemove",dragElement);
    e.preventDefault();
    e.initDomX = initDomX;
    e.initDataX = initDataX;
    e.initDomY = initDomY;
    e.initDataY = initDataY;
    e.curDomX = e.layerX;
    e.curDomY = e.layerY;
    e.curDataX = plotObj.fromDomXCoord(e.clientX);
    e.curDataY = plotObj.fromDomYCoord(e.clientX);
    for (let mouseupCallback of mouseupCallbacks) {
      mouseupCallback(e);
    }
  }
  
  return dragMouseDown;
}

function createVerticalCrosshair(canvas) {
  let ctx = canvas.getContext("2d");
  let endY = canvas.height;
  return function(ev) {
    let {layerX} = ev;
    ctx.beginPath();
    ctx.moveTo(layerX,0);
    ctx.lineTo(layerX,endY);
    ctx.stroke();
  };
}

function createHighligher(canvas,domX,domYs) {
  let ctx = canvas.getContext("2d");
  return function(ev) {
    let {index} = ev;
    for (let domY of domYs.map((series)=>series[index])) {
      ctx.beginPath();
      ctx.arc(domX[index], domY, 5, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fill();
    }
  };
}

function createHorizontalSelector(canvas) {
  let ctx = canvas.getContext("2d");
  return function(e) {
    let curDomX = Math.min(Math.max(0,e.curDomX),canvas.width);
    let initDomX = e.initDomX;
    ctx.save();
    ctx.fillStyle = "rgba(220,200,200,0.4)";
    ctx.fillRect(initDomX,0,curDomX-initDomX,1);
    ctx.restore();
  };
}
