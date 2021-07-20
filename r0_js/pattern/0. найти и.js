// найти индекс ел мас по содержимому и удалить его
  rArr.splice(rArr.indexOf(личность), 1);
// найти и удалить через индекс оф .indexOf()
  const rFoundIndexEl = rArr.indexOf(findEl);
    if (rFoundIndexEl !== -1) {rArr.splice(rFoundIndexEl, 1);
// for for
  for (let i = 0; i < rArr.length; i++) {
    if (findEl === rArr[i]){return true;
    for (const rKey of rArr){if (rKey === findEl) {
// for иф includes del
  for (let i = 0; i < rArr.length; i++) {
    if (rArr2.includes(rArr[i]) || rArr2Up.includes(rArr[i])) {delete rArr[i];
// фор иф
  for (let i = 0; i < rArr.length; i++) {
    if (rMax === rArr[i]) {rArr.splice(i, 1); break
// for найти числа
  for (let i = 0; i < rArr.length; i++) {
    if (typeof rArr[i] === 'number') {
//.includes
  const check = /*(rArr,findEl) => */rArr.includes(findEl);
// найти нечётные числа
for(let i=1; i<=n; i++) i%2==1 ? /**/ :0
// найти чётные числа
for(let i=2; i<=n; i++) i%2==0 ? /**/ :0
// найти больший общий делитель через алг Евклида
  while(a!==b)a>b ? a=a-b : b=b-a
// найти простое или составное число
let i=2, j=0;
while(i*i <= n && j != 1){
  if(n%i === 0){j=1;i++;}else{i++}
}
return j===1 ? "Составное число" : "Простое число";
// найти простое число
Простое число делится без остатка только на 1 и на себя.
Не простое число делится без остатка на числа перед ним, на себя, на 1.
let i=2, rPrime='';
nextPrime:
for(i;i<n;i++){
  for(let j=2; j<i; j++){
    if(i%j === 0)continue nextPrime
  }
    rPrime += i + ' ';
}
return rPrime;