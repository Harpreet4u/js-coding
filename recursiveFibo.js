"use strict";

// Complexity O(2^n) visits all the leaf nodes

const nthFibo = (n) => {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return nthFibo(n-1) + nthFibo(n-2);
};


for (let i=0;i<=5;++i) {
    console.log(nthFibo(i));
}
