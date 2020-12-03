"use strict";

const is = (x, y) => {

    if (x === y) {
        // +0 and -0 check +0 === -0 is true but 1/+0(+Infinity) === 1/-0(-Infinity) is false
        return x !== 0 || y !== 0 || 1/x === 1/y;
    } else {
        // NaN check as NaN === NaN is false
        return x !== x && y !== y;
    }
}

console.log(`In JS NaN === NaN is false: ${NaN === NaN}`);


console.log(`is("abc", "abc") is true: ${is("abc", "abc")}`);
console.log(`is("abc", "abcd") is false: ${is("abc", "abcd")}`);

console.log(`is(1, 1) is true: ${is(1, 1)}`);
console.log(`is(1, 2) is false: ${is(1, 2)}`);

console.log(`is(-0, +0) is false: ${is(+0, -0)}`);
console.log(`is(-0, -0) is true: ${is(-0, -0)}`);

console.log(`is(globalThis, globalThis) is true: ${is(globalThis, globalThis)}`);

console.log(`is(NaN, NaN) is true: ${is(NaN, NaN)}`);

console.log(`is([], []) is false: ${is([], [])}`);

const foo = {a: 1};
const bar = {a: 1};

console.log(`is(foo, foo) is true: ${is(foo, foo)}`);
console.log(`is(foo, bar) is false: ${is(foo, bar)}`);
