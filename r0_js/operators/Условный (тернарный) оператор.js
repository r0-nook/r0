// ?  : замена if
let r3 = false ? "r0", "r4" : false ? "r1" : "r2";
return r3 // "r2"

let r0 =
a + b === res ? 'addition':
a - b === res ? 'subtraction':
a * b === res ? 'multiplication':
a / b === res ? 'division' : '';//  :'' обязательны в конце

return r0;