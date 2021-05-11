'use strict';

/**
 * @param {string} guestsInput
 *
 * @returns {number|string}
 */

function calculateGuests(guestsInput) {
  const r;

  for (let i = 0; i < guestsInput.lenght; i++){
    function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
    return false;
    }
    }
    return element > 1;
    }
    
    r = guestsInput.split();
    return r.find(isPrime)
    
    // return 

  }