//
for (let i = 0; i < rArr.length; i++) {
 if (rArr[i] < 5) {
   rResult.push(0);
 } else {
   rResult.push(1);
 }
}

//
rArr.map(n=> n<5 ? 0:1)