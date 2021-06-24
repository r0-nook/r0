
function getLeaders(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    let rSum = 0;

    for (let ri = i + 1; ri < numbers.length; ri++) {
      rSum += numbers[ri];
    }

    if (numbers[i] > rSum) {
      result.push(numbers[i]);
    }
  }

  return result;
}