'use strict';debugger;

const resultArr = [];
let arr=[1,2,4,6];
for (let i=0; i<arr.length; i++) {
	let rPlus=0;
	if (typeof (arr[i+1]) === 'number') {
		for (let rI=i+1; rI<arr.length; rI++) {
			if (arr[i]>arr[rI]) {
			  rPlus++;
			}
		}
	}
	resultArr.push(rPlus);
}