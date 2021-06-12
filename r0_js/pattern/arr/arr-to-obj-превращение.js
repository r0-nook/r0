function countLettersInString(str) {
  return str.split('').sort().reduce((rObj, elem) => {
    rObj[elem] ? rObj[elem] += 1 : rObj[elem] = 1;

    return rObj;
  }, {});

// превращение масива в обж
const toObj = (arr) => arr.reduce((a, b) => ({ ...a, ...b }));

// непонимаю