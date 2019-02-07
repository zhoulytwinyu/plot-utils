export function shadeArea(canvas,x,y,w,h,color){
  let ctx = canvas.getContext("2d");
  let globalCompositeOperation_BAK = ctx.globalCompositeOperation;
  ctx.globalCompositeOperation = "source-atop";
  
  
  ctx.globalCompositeOperation = globalCompositeOperation_BAK;
}
