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

export function createSimpleRotateBitmap(bitmap,rotation) {
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

export function createSimpleCropBitmap(bitmap,width,height,align) {
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
