'use strict';
debugger;

    let x=1, n=5;
    if(n%2) {
		for (let i = 1; i<=n; i++) i%2 == 1 ? x*=i :0
    } else {
		for (let i = 2; i<=n; i++) i%2 == 0 ? x*=i :0
    }
    // return x;
    let r=x;