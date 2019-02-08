export function applyCanvasStyle(ctx,{lineWidth,setLineDash,
                                      strokeStyle,fillStyle,
                                      font
                                      }) {
  if (lineWidth !== null && lineWidth !== undefined) {
    ctx.lineWidth = lineWidth;
  }
  if (setLineDash !== null && setLineDash !== undefined) {
    ctx.setLineDash(setLineDash);
  }
  if (strokeStyle !== null && strokeStyle !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  if (fillStyle !== null && fillStyle !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  if (font !== null && font !== undefined) {
    ctx.font = font;
  }
}
