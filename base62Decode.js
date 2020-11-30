"use strict";


// complexity O(n) n is string length.

const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const decode = (str) => {   
 
    const base = DICTIONARY.length;
    let num = 0;

    for (let i=0; i < str.length; ++i) {
        /*
            base is 2 here for example:
            Simple explanation for this logic consider 10 in binary 1010 -> (2^3*1)+(2^2*0)+(2^1*1)+(2^0*0)
            which evaluates to ((((0*2) + 1)*2 + 0)*2 + 1)*2 + 0

        */
        num = (num * base) + DICTIONARY.indexOf(str[i]);
    } 

    return num;
}

console.log(decode('VhU2'));
