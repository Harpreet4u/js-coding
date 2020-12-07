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


const divide = (x, y) => {
    let isNegative = 0, ans = 0;
    if (x < 0 ) {
        x = negateValue(x);
        isNegative = !isNegative;
    }
    if (y < 0 ) {
        y = negateValue(y);
        isNegative = !isNegative;
    }
    if (y !== 0) {
        while (x >= y) {
            x = substraction(x, y);
            ans++;
        }
    }
    if(isNegative) {
        ans = negateValue(ans);
    }
    return ans;
};


console.log(divide(9, 3));
console.log(divide(-9, 3));
