//чисто
let rMax = array.reduce((r0, r1) => r0 > r1 ? r0 : r1);
let rMin = array.reduce((r0, r1) => r0 < r1 ? r0 : r1);

// for версия мин
let rMin = numbers[0];
for (const i of numbers) {rMin > i ? rMin = i : 0}

//тупо
function arrayMin(arr) {
  return arr.reduce(function (p, v) {    return ( p < v ? p : v );  });
}
function arrayMax(arr) {
  return arr.reduce(function (p, v) {    return ( p > v ? p : v );  })
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
};

function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};