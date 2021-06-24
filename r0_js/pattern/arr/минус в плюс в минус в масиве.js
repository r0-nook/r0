// - + // обход 0 и []
return array.map( x => x === 0 ? x : -x);
//
return array.map(i => 0 - i);
//
  var rArr = [];
  for(const rKey of array){
    rArr.push(-rKey);
  }
   return rArr;