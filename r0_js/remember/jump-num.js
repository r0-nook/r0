
function isJumping(number) {
  const r0 = 'JUMPING';
  const r1 = 'NOT JUMPING';
  const rStr = String(number);

  for (let i = 1; i < rStr.length; i++) {
    if ((rStr[i] - rStr[i - 1] !== 1) && (rStr[i] - rStr[i - 1] !== -1)) {
      return r1;
    }
  }

  return r0;
}
