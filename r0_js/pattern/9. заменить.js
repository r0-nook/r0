// расширено
const search = '1';
const replaceWith = '2';
const result = '1 1 go'.split(search).join(replaceWith);

// альтернатива
const result = '1 1 go'.replaceAll(search, replaceWith);

// в виде фк
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
