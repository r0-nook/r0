'use strict';debugger;

let r0=[];
function rangeOfNumbers(startNum, endNum) {
  let rNow=0;
  if (startNum===endNum) {return r0.push(endNum)}
  else {
    r0.push(startNum);
    rangeOfNumbers(startNum++);
    return r0;
  }
};

const r3=rangeOfNumbers(3,7);