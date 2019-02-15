//~ export function applyCanvasStyle(ctx,{lineWidth,setLineDash,
                                      //~ strokeStyle,fillStyle,
                                      //~ font, textAlign, textBaseline
                                      //~ }) {
  //~ if (lineWidth !== null && lineWidth !== undefined) {
    //~ ctx.lineWidth = lineWidth;
  //~ }
  //~ if (setLineDash !== null && setLineDash !== undefined) {
    //~ ctx.setLineDash(setLineDash);
  //~ }
  //~ if (strokeStyle !== null && strokeStyle !== undefined) {
    //~ ctx.strokeStyle = strokeStyle;
  //~ }
  //~ if (fillStyle !== null && fillStyle !== undefined) {
    //~ ctx.fillStyle = fillStyle;
  //~ }
  //~ if (font !== null && font !== undefined) {
    //~ ctx.font = font;
  //~ }
  //~ if (textAlign !== null && textAlign !== undefined) {
    //~ ctx.textAlign = textAlign;
  //~ }
  //~ if (textBaseline !== null && textBaseline !== undefined) {
    //~ ctx.textBaseline = textBaseline;
  //~ }
//~ }

//~ export const drawTextInRect = (function() {
  //~ let tmpCanvas = document.createElement("canvas");
  //~ let tmpCtx = tmpCanvas.getContext("2d");
  //~ return function (ctx,rectX,rectY,rectWidth,rectHeight,text,textX,textY,textStyle={},textRotation=0) {
    //~ tmpCanvas.height = rectHeight;
    //~ tmpCanvas.width = rectWidth;
    //~ tmpCtx.clearRect(0,0,rectWidth,rectHeight);
    //~ applyCanvasStyle(tmpCtx,textStyle);
    //~ tmpCtx.translate(textX-rectX,textY-rectY);
    //~ tmpCtx.rotate(textRotation);
    //~ if ("strokeStyle" in textStyle) {
      //~ tmpCtx.strokeText(text,0,0);
    //~ }
    //~ tmpCtx.fillText(text,0,0);
    //~ tmpCtx.translate(-textX+rectX,-textY+rectY);
    //~ tmpCtx.rotate(-textRotation);
    //~ ctx.drawImage(tmpCanvas,rectX,rectY);
  //~ }
//~ })();

export function createTextBitmap(text,height,font,fillStyle,lineWidth,strokeStyle) {
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

export function createRectBitmap(width,height,fillStyle,lineWidth,strokeStyle) {
  let canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  let rectWidth = lineWidth ? width-lineWidth : width;
  let rectHeight = lineWidth ? height-lineWidth : height;
  let ctx = canvas.getContext("2d");
  if (fillStyle) {
    ctx.fillRect(0,0,rectWidth,rectHeight);
  }
  if (strokeStyle && lineWidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(0,0,rectWidth,rectHeight);
  }
  return canvas;
}

export function createCircleBitmap(radius,fillStyle,lineWidth,strokeStyle) {
  let canvas = document.createElement("canvas");
  canvas.height = radius;
  canvas.width = radius;
  let circleRadius = lineWidth ? radius-lineWidth : radius;
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(circleRadius, width/2,height/2, 0, 2 * Math.PI);
  if (fillStyle) {
    ctx.fill();
  }
  if (strokeStyle && lineWidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
  return canvas;
}

export function simpleRotateBitmap(bitmap,rotation) {
  // calculate new height, width
  let angleAlpha = Math.atan2(bitmap.height,bitmap.width);
  let diagLength = Math.sqrt(bitmap.height*bitmap.height+bitmap.width*bitmap.width);
  
  let newHeight = Math.max( Math.abs(Math.sin(rotation+angleAlpha)),
                            Math.abs(Math.sin(rotation-angleAlpha))
                            )
                  * diagLength;
  let newWidth = Math.max( Math.abs(Math.cos(rotation+angleAlpha)),
                            Math.abs(Math.cos(rotation-angleAlpha))
                            )
                  * diagLength;
  // create canvas
  let canvas = document.createElement("canvas");
  canvas.width = newWidth;
  canvas.height = newHeight;
  let ctx = canvas.getContext("2d");
  ctx.translate(newWidth/2,newHeight/2);
  ctx.rotate(rotation);
  ctx.drawImage(bitmap,-bitmap.width/2,-bitmap.height/2);
  ctx.rotate(-rotation);
  ctx.translate(-newWidth/2,-newHeight/2);
  return canvas;
}

export function simpleCropBitmap(bitmap,width,height,align) {
  let canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  let ctx = canvas.getContext("2d");
  switch (align) {
    case 0:
      ctx.drawImage(bitmap,0,0);
      break;
    case 1:
      ctx.drawImage(bitmap,(width-bitmap.width)/2,0);
      break;
    case 2:
      ctx.drawImage(bitmap,width-bitmap.width,0);
      break;
    case 3:
      ctx.drawImage(bitmap,0,(height-bitmap.height)/2);
      break;
    case 4:
      ctx.drawImage(bitmap,(width-bitmap.width)/2,(height-bitmap.height)/2);
      break;
    case 5:
      ctx.drawImage(bitmap,width-bitmap.width,(height-bitmap.height)/2);
      break;
    case 6:
      ctx.drawImage(bitmap,0,height-bitmap.height);
      break;
    case 7:
      ctx.drawImage(bitmap,(width-bitmap.width)/2,height-bitmap.height);
      break;
    case 8:
      ctx.drawImage(bitmap,width-bitmap.width,height-bitmap.height);
      break;
  }
  return canvas;
}

export function simpleFillBitmap(ctx,bitmap,dx,dy,sposition) {
  switch (dposition) {
    case 0:
      ctx.drawImage(bitmap,dx,du);
      break;
    case 1:
      ctx.drawImage(bitmap,dx-bitmap.width/2,  dy);
      break;
    case 2:
      ctx.drawImage(bitmap,dx-bitmap.width,    dy);
      break;
    case 3:
      ctx.drawImage(bitmap,dx,                 dy-bitmap.height/2);
      break;
    case 4:
      ctx.drawImage(bitmap,dx-bitmap.width/2,  dy-bitmap.height/2);
      break;
    case 5:
      ctx.drawImage(bitmap,dx-bitmap.width,    dy-bitmap.height/2);
      break;
    case 6:
      ctx.drawImage(bitmap,dx,                 dy-bitmap.height);
      break;
    case 7:
      ctx.drawImage(bitmap,dx-bitmap.width/2,  dy-bitmap.height);
      break;
    case 8:
      ctx.drawImage(bitmap,dx-bitmap.width,    dy-bitmap.height);
      break;
  }
}

export function shadeArea(ctx,x,y,w,h,fillStyle){
  let ctx = canvas.getContext("2d");
  let globalCompositeOperation_BAK = ctx.globalCompositeOperation;
  let fillStyle_BAK = ctx.fillStyle;
  ctx.globalCompositeOperation = "source-atop";
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x,y,w,h);
  ctx.globalCompositeOperation = globalCompositeOperation_BAK;
  ctx.fillStyle = fillStyle_BAK;
}
