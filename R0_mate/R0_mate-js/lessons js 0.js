const calculateTaxes = (income) => {
  const rate1 = 0.02;
  const step1 = 1000;

  const rate2 = 0.03;
  const step2 = 10000;

  const rate3 = 0.05;

  if (income <= step1) {
    return income * rate1;
  } if (income <= step2) {
    return step1 * rate1 
    + (income - step1) * rate2;
  } return step1 * rate1 
    + (step2 - step1) * rate2
    + (income - step2) * rate3;
}


___________________________

const getLargestExpressionResult = (a, b) => {

  const expressions = [a - b, a * b, a / b];
  let max = a + b;

  for (const expression of expressions) {
    if (expression > max) {
      max = expression;
    }
  }
  return max;

}

___________________________switch


const getDirection = (direction) => {
  switch (direction) {
    case 'back':     return 'hor=0 ver=-1'; break;
    case 'forward': return 'hor=0 ver=1'; break;
    case 'right':     return 'hor=1 ver=0'; break;
    case 'left':     return 'hor=-1 ver=0'; break;
    case 'stop':     return 'hor=0 ver=0'; break;
    default: return 'hor=0 ver=0'; break;
  }
};

__________________________for


function getDrinks(numberOfGuests) {
  let drinks = 0;
  for (let i = 1; i <= numberOfGuests; i += 1) {
    drinks += i;
  }  return drinks;
}

___________________________
function getDrinksWithStep(numberOfGuests, step) {
  let shot = 0;
  for (let i = 1; i <= numberOfGuests; i += step) {
    shot += i;
  } return shot;
}
________________ bank profit
function calculateProfit(amount, percent, period) {
  let sum = 0;
  for (let i = 1; i <= period; i += 1) {
    sum += amount * percent / 100;
    amount += amount * percent / 100;
  };  return sum;
}


________________
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