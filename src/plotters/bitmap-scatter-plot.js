import {simpleFillBitmap} from "../canvas-utils";

export function bitmapScatterPlot(ctx, domXs, domYs, bitmaps, positions, rotations) {
  let l = domXs.length;
  if (l!==domYs.length || l!==bitmaps.length ||
      l!==positions.length || l!==rotations.length) {
    throw new TypeError("Array length do not match.");
  }
  for (let i=0; i<l; i++) {
    simpleFillBitmap(ctx,bitmaps[i],domXs[i],domYs[i],positions[i],rotations[i]);
  }
}
