"use strict";

// Similar to binary conversion O(log(n)) -> here the log base is 62 instead of 2
// In order words number of bits generated in loop and reverse.

const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const encodeId = (id) => {
    let encodedVal = '';
    const base = DICTIONARY.length;

    if (id === 0) {
        return DICTIONARY[0];
    }

    while(id > 1) {
        encodedVal += DICTIONARY[(id % base)];
        id = Math.floor(id / base);
    }

    return encodedVal.split('').reverse().join('');
}


console.log(encodeId(11231230));
