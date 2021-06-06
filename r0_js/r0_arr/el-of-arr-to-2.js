  if (r0.length % 2 === 0) {
    for (let i = 0; i < r0.length; i+=2) {
      r1.push(r0[i]);
      r2.push(r0[i+1]);
    }

    for (let i = 0; i < r0.length; i++) {
      r1[i] += r2[i];
    }
  }