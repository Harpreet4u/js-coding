"use strict";

const add = (x, y) => {
    while (y!==0) {
        let carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }
    return x;
};

const negateValue = (x) => {
    return add(~x, 1);
};

const substraction = (x, y) => {
    return add(x, negateValue(y));
};


console.log(substraction(20, 10));
console.log(substraction(5, 10));
