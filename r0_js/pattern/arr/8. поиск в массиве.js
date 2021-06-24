// поиск макс
	let max = 0;
	for (const i of r1){i > max ? max = i}
// поиск мин
	let rMin = r1[0];
	for (const i of r1){rMin > i ? rMin = i : 0}

// поиск большего ел в масс через два фор
	for (let i = 0; i < rArr.length; i++) { //
	 for (let i1 = i + 1; i1 < rArr.length; i1++) { //
	   if (rArr[i] > rArr[i1]) {
	   	rMax = rArr[i]

// содержит ли масив ел rArr[i] for .includes
	for (let i = 0; i < rArr.length; i++) {
		if(rVowel.includes(rArr[i])) {

// найти индекс ел мас по содержимому и удалить его
	rArr.splice(rArr.indexOf(личность), 1);


