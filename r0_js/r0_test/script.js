'use strict';
debugger;

	let numbers = [1, 3, 1, 5, 2, 5, 2, 6, 3];

	const rMax = [];
	let r5 = 5, rNumbers = [...numbers];

	while (r5) {
		const r0 = rNumbers.reduce((a,b)=>a>b?a:b);

		r5--; rMax.push(r0);
		rNumbers.splice(rNumbers.indexOf(r0), 1);
	}

	const r1 = rMax;