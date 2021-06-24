r0.split('') // строка в масив еллемментов
const r2 = String(n).split('').map(Number); //в строку > в масив > в числа
r0.join('') // масив в строку

// число в масив чисел
let num = 123456;
let rArr = num.toString().split('').map(Number);

// преобразование строк в номер
['1', '2', '3'].map(Number)

// превращение масива в обж
const toObj = (arr) => arr.reduce((a, b) => ({ ...a, ...b }));

// превращение масива в обж
function countLettersInString(str) {
  return str.split('').sort().reduce((rObj, elem) => {
    rObj[elem] ? rObj[elem] += 1 : rObj[elem] = 1;
    return rObj;
  }, {});