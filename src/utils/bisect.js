function bisect_left(sorted,target) {
  let l = 0;
  let r = sorted.length-1;
  let m = null;
  while (r>=l) {
    m = ~~((r+l)/2);
    if (sorted[m] >= target) {
      r=m-1;
    }
    else {
      l=m+1;
    }
  }
  return r;
}

function bisect_right(sorted,target) {
  let l = 0;
  let r = sorted.length-1;
  let m = null;
  while (r>=l) {
    m = ~~((r+l)/2);
    if (sorted[m] > target) {
      r=m-1;
    }
    else {
      l=m+1;
    }
  }
  return l;
}
