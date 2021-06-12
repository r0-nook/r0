  const r1 = word.toUpperCase().split('');// строка в масив букв
  let r2 = [];
  const r3 = [];

///////////////////////////////////
  for (let i = 0; i < r1.length; i++) {
    r3.push(r1.join(''));// обеъденить в строку и запушить в масс
    r2 = r1.shift(); // вытащить первый ел масс
    r1.push(r2); // вставить этот ел в конец масс
  }

///////////////////////////////////////////////
  for (let i = 0; i < r1.length; i++) {
    r3.push(r1.join(''));
    r1.push(r1.shift());
  }

  return r3;