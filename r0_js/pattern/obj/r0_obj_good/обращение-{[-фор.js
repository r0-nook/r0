// добраится до ел в ключе обж
// обж.ключ.ел

// стработало обращение к содержимому обж.кей

for (const key in object) {
 if (typeof (object[key]) === 'number') {
   rSum += object[key];
 }
}
//странно
for (const suspectKey in suspects) {
  for (const rKey of suspects[suspectKey]) {