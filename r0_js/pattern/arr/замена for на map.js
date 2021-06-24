//
for (let i = 0; i < x.length; i++) {
 if (x[i] < 5) {
   rResult.push(0);
 } else {
   rResult.push(1);
 }
}

//
x.map(n => n < 5 ? 0 : 1)