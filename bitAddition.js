"use strict";

const add = (x, y) => {
    while (y!==0) {
        let carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }
    return x;
};

console.log(add(1000, 2000));
