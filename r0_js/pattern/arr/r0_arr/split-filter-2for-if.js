
function splitString(str) {
  const r0 = str.split(''), r1 = [], r2 = [];
  let ri;

  for (let i = 0; i < r0.length; i += 2) {
    r1.push(r0[i]);
    r2.push(r0[i + 1]);
  }

  if (r0.length % 2 === 1) {
    for (ri = 0; ri < (r0.length / 2) - 1; ri++) {
      r1[ri] += r2[ri];
    }
    r1[ri] += '_';
  } else {
    for (let i = 0; i < r0.length; i++) {
      r1[i] += r2[i];
    }
  }

  return r1.filter(x => !!x);
}
