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


const multiply = (x, y) => {
    let checkBit = 1, ans = 0;
    if(x < 0) {
        x = negateValue(x);
        y = negateValue(y);
    }
    while (x >= checkBit && y) {
        if (x & checkBit) {
            ans = add(y, ans);
        }
        checkBit = checkBit << 1;
        y = y << 1;

    }
    return ans;
};

console.log(multiply(20, 80));
