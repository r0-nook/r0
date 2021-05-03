function addLength(str) {
  let r0_arr = str.split(" "), i  
  for (i = 0; i < r0_arr.length; i++) { //<
    r0_arr[i] +=" " + r0_arr[i].length;
  }
  return r0_arr
}
