// сортировка масива чисел от мин до макс
	rArr.sort((a,b) => a - b);

// сортировка масива чисел от макс до мин
	rArr.sort((a,b) => b - a);

// реверс абс
	myarray.sort().reverse()

// short
	return parseInt(String(n).split('').sort().reverse().join(''))

// long
let n = 42145;
let rArr = n.toString().split('').map(Number);// цифру в масив цифр
let rClon = rArr.slice(0);//клонирование масива
let rResult = [];

for (const i of rArr) {
	let rMax = rClon.reduce((rAc, i) => rAc > i ? rAc : i);
	rResult.push(rMax);
	rClon.splice(rClon.indexOf(rMax), 1);
}
rResult = Number(rResult.join(''));