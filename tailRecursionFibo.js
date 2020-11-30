"use strict";

// Complexity O(n) and space complexity (n)

const nthFibo = (n, last, lastlast) => {
    if (n == 0) {
        return lastlast;
    }
    if (n == 1) {
        return last;
    }
    return nthFibo(n-1, last + lastlast, last);
};


for (let i=0;i<=5;i++) {

    console.log(nthFibo(i, 1, 0));
}
