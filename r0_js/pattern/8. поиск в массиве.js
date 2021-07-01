// поиск макс
	let max = 0;
	for (const i of rArr){i > max ? max = i}
// поиск мин
	let rMin = rArr[0];
	for (const i of rArr){rMin > i ? rMin = i : 0}

//чисто
let rMax = array.reduce((r0, r1) => r0 > r1 ? r0 : r1);
let rMin = array.reduce((r0, r1) => r0 < r1 ? r0 : r1);

// поиск большего ел в масс через два фор
	for (let i = 0; i < rArr.length; i++) {
	 for (let i1 = i + 1; i1 < rArr.length; i1++) {
	   if (rArr[i] > rArr[i1]) { rMax = rArr[i];}} break;


