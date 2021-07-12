r0.split('') // строка в масив еллемментов
['1', '2', '3'].map(Number) // преобразование строк в числа
r0.join('') // масив в строку

//в строку > в масив > в числа
const r2 = String(n).split('').map(Number);

// число в масив чисел
let num = 123456;
let rArr = num.toString().split('').map(Number);

// превращение масива в обж
const toObj = (arr) => arr.reduce((a, b) => ({ ...a, ...b }));

// превращение масива в обж
function countLettersInString(str) {
  return str.split('').sort().reduce((rObj, elem) => {
    rObj[elem] ? rObj[elem] += 1 : rObj[elem] = 1;
    return rObj;
  }, {});

// округление преобразование в целое
	parseInt(seconds % rHour1 / rMinutes1)

// диапазон в масив
for(i;i<a;i++)r.push(i)