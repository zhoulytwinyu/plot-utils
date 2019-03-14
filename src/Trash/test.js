var canvas = document.querySelector("#myCanvas");
var ctx= canvas.getContext("2d");
var width = canvas.width;
var height =canvas.height;
ctx.clearRect(0,0,width,height);

function createTextBitmap(text,height,font,fillStyle,lineWidth,strokeStyle) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  ctx.font = font;
  let width = ctx.measureText(text).width;
  canvas.height = height;
  canvas.width = width;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = font;
  if (fillStyle) {
    ctx.fillStyle=fillStyle;
    ctx.fillText(text,width/2,height/2);
  }
  if (strokeStyle && lineWidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.strokeText(text,width/2,height/2);
  }
  return canvas;
}

function createRectBitmap(width,height,fillStyle,lineWidth,strokeStyle) {
  let canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  let rectWidth = lineWidth ? width-lineWidth : width;
  let rectHeight = lineWidth ? height-lineWidth : height;
  let ctx = canvas.getContext("2d");
  if (fillStyle) {
    ctx.fillRect(0,0,rectWidth,rectHeight);
  }
  if (strokeStyle && linewidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(0,0,rectWidth,rectHeight);
  }
  return canvas;
}

var img = createTextBitmap("hello",32,"32px Sans","red",1,'black');
ctx.drawImage(img,10,23)
