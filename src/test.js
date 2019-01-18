
var main = function(){
  var staticObj = null;
  return function(){
    var t=new Date();
    var plotCanvas = document.querySelector("#plot");
    var highlightCanvas = document.querySelector("#highlight");
    var verticalCanvas = document.querySelector("#vertical");
    var horizontalCanvas = document.querySelector("#horizontal");
    var horizontalCanvas2 = document.querySelector("#horizontal2");
    var realtimeCanvas = document.querySelector("#realtime");
    
    if (staticObj) {
      staticObj();
    }
    
    var x = [...Array(100).keys()].map((x)=>(1+x)*100);
    var ys = [x.map( ()=>Math.random()*400),
              x.map( ()=>Math.random()*400)
              ];
    var labels = ["y1","y2"];

    var minX = 0;
    var maxX = 10000;
    var minY = 0;
    var maxY = 400;

    var plotObj = createLinearPlotObject( plotCanvas,highlightCanvas,
                                          verticalCanvas,horizontalCanvas,realtimeCanvas,
                                          x,ys,labels,
                                          minX,maxX,
                                          minY,maxY
                                          );
    plotCanvas.getContext("2d").clearRect(0,0,plotCanvas.width,plotCanvas.height);
    
    drawXAxisDateGrid(plotCanvas,plotObj);
    stepLinePlot_single(plotCanvas.getContext("2d"),plotObj.domX,plotObj.domYs[0],{strokeStyle:"red"});
    stepFillPlot_single(plotCanvas.getContext("2d"),plotObj.domX,plotObj.domYs[1],plotObj.toDomYCoord(0),{fillStyle:"rgba(0,0,0,0.1)"});
    drawAxisBorder(plotCanvas,plotObj,true,true);
    
    var highlightHandler = createHighlightEventHandler(plotObj,[createCanvasClearer(highlightCanvas),createHighligher(highlightCanvas,plotObj.domX,plotObj.domYs)]);
    var mousemoveHandler = createMousemoveEventHandler([createCanvasClearer(horizontalCanvas),createVerticalCrosshair(horizontalCanvas)]);
    var dragHandler = createDragEventHandler( plotObj,
                                              [createCanvasClearer(horizontalCanvas2),createHorizontalSelector(horizontalCanvas2)],
                                              [createCanvasClearer(horizontalCanvas2),(e) => {
                                                  if (Math.abs(e.curDomX-e.initDomX)>10) {
                                                    console.log({start:e.initDataX,end:e.curDataX});
                                                  }
                                                }
                                               ]
                                              );
    
    staticObj = addPlotEventHandlers(realtimeCanvas,{
      "mousemove":[mousemoveHandler,highlightHandler],
      "mousedown":[dragHandler],
      "mouseout":[createCanvasClearer(horizontalCanvas)]
      });

    console.log(new Date()-t);
  }
}();

main()
