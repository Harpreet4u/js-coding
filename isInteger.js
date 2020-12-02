"use strict";

const isInteger = (x) => {
    return (x ^ 0) === x;
};


console.log(isInteger(123));
console.log(isInteger("abc"));
