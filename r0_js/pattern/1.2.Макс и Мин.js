//еще тупее
const min = (arr) => Math.min(...arr);
const max = (arr) => Math.max(...arr);

//тупо
function arrayMin(arr) {
   return arr.reduce((a,b)=>a<b?a:b);
}
function arrayMax(arr) {
  return arr.reduce((a,b)=>a>b?a:b);
}

/// скорость
function arrayMin(arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//макс и мин значения чисел
  if (n === 1/0 || n === Infinity+1) {return Number.POSITIVE_INFINITY}
  if (n === -Number.MAX_VALUE*2) {return Number.NEGATIVE_INFINITY}
  if (isNaN(n)) {return Number.NaN}
  if (n === 1.7976931348623157e+308) {return Number.MAX_VALUE}
  if (n === 5e-324) {return Number.MIN_VALUE}
  if (n > 0) {return r0 + n}

  if (n === Number.POSITIVE_INFINITY) {return 'Number.POSITIVE_INFINITY'}
  if (n === Number.NEGATIVE_INFINITY) {return 'Number.NEGATIVE_INFINITY'}
  if (n === Number.MAX_VALUE) {return 'Number.MAX_VALUE'}
  if (n === Number.MIN_VALUE) {return 'Number.MIN_VALUE'}
  if (n > 0) {return r0 + n}
  // if (isNaN(n)) {return 'Number.NaN'}