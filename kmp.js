"use strict";

// complexity O(n)

const getLPS  = (lps, pattern) => {
    lps[0] = 0;
    let i = 1;
    let size = pattern.length;
    let count = 0;

    while (i < size) {
        if (pattern[i] === pattern[count]) {
            count++;
            lps[i] = count;
            i++;
        } else {
            if (count !== 0) {
                count = lps[count-1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

const search = (pattern, text) => {
    let i = 0, j = 0;
    const textSize = text.length;
    const patternSize = pattern.length;
    if (patternSize === 0 || textSize === 0){
        return;
    }

    const lps = [];
    getLPS(lps, pattern);

    while (i < textSize) {
        let isMatch = false;
        if (pattern[j] === text[i]) {
            i++;
            j++;
            isMatch = true;
        }

        if (j === patternSize) {
            console.log(`Pattern found at index: ${i-j}`);
            j = lps[j-1];
        } else if(i<textSize && !isMatch) {
            if (j !== 0){
                j = lps[j-1];
            } else {
                i++;
            }
        }
    }
};

console.log(search('', 'aaa'));
console.log(search('aa', 'aajhgkjgaakjgjhkaagkjhkjaa'));
