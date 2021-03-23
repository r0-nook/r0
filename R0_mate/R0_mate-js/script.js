//'use strict';


function getYears(amount, percent, limit) {
  // write code here
  let amounts = amount;
  let number = 0;

  for (number; amounts < limit; number++) {
    amounts += amounts * percent / 100;

    if (amounts > limit) {
      break;
    };
  };

  return number;
}
debugger;

// ___________________________decodesignal.js