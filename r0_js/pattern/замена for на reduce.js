//reduce
const points=array=>array.reduce((rAccum,i)=>{
    return rAccum += i[0]>i[2] ? 3 : i[0]===i[2] ? 1 : 0;
  },0)

// for
let rAccum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i][0] > array[i][2]) {
    rAccum += 3;
  } else if (array[i][0] === array[i][2]) {
    rAccum += 1;
  }
}
return rAccum;

/////////////////???????????????????????
	const { x: countX = 0, o: countO = 0 } = Array
  .from(str.toLowerCase())
  .reduce((acc, n) => (acc[n] = (acc[n] ?? 0) + 1, acc), {});
	/////////////////???????????????????????
		const rX = 'xX';
		const rO = 'oO';
		let rCountX = 0;
		let rCountO = 0;

		for (let i = 0; i < str.length; i++) {
		  if (rX.includes(str[i])) {
		    rCountX++;
		  } else if (rO.includes(str[i])) {
		    rCountO++;
		  }
		}
		rCountX === rCountO ? true : false;