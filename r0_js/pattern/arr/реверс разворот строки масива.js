const rCanged = str.split(' '); // превращение строки в масив
const rNoChange = [...rCanged]; // копировать масив

const rEnd = [];
for (let i = 0; i < rNoChange.length; i++) {
 rEnd.push(rCanged.pop()); // вытащить первый ел rCanged // вставить этот ел в конец масс
}
return rEnd.join(' '); // сшивание масс через пробел в строку

//////// alt
return str.split(' ').reverse().join(' ');