// long
let n = 42145;
let r0 = n.toString().split('').map(Number);// цифру в масив цифр
let rClon = r0.slice(0);//клонирование масива
let rResult = [];

for (const i of r0) {
	let rMax = rClon.reduce((rAc, i) => rAc > i ? rAc : i);
	rResult.push(rMax);
	// const idx = rClon.indexOf(rMax);// найти индекс rMax в массиве
	rClon.splice(rClon.indexOf(rMax), 1);
}
rResult = Number(rResult.join(''));

//
rClon.splice(rClon
	.indexOf(n
		.toString()
		.split('')
		.map(Number)
		.reduce((rAc, i) => rAc > i ? rAc : i);), 1);

rResult = Number(rResult
	.push(n.toString()
		.split('').map
		(Number)
		.reduce((rAc, i) => rAc > i ? rAc : i))
	.join(''));