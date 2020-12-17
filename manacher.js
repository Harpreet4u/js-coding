"use strict";

// Complexity: O(n) linear manachers algo

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const stringSize = s.length;
    if (stringSize === 1) {
        return s;
    }
    // augment the string and make length odd
    let newS = '';
    let index = 0;
    for (let i=0;i<2*stringSize+1;++i) {
        if (i%2===0) {
            newS += '$';
        } else {
            newS += s[index];
            index++;
        }
    }

    // Run the manachar algo
    let start = 0;
    let end = 0;
    const newSSize = newS.length;
    const T = Array(newSSize).fill(0);
    for (let i=0;i<newSSize;) {
        while(start>0 && end < newSSize-1 && newS[start-1] === newS[end+1]) {
            start--;
            end++;
        }
        T[i] = end - start + 1;

        // Exit if end is at string length
        if(end === newSSize - 1) {
            break;
        }
        let newCenter = end + (i%2 === 0 ? 1 : 0);

        // pick a longest palindrome as new center
        for (let j=i+1;j<=end;++j) {
            T[j] = Math.min(T[i-(j-i)], 2*(end-j)+1);
            if (j+Math.floor(T[i-(j-i)]/2) === end) {
                newCenter = j;
                break;
            }
        }
        i = newCenter;
        start = i - Math.floor(T[i]/2);
        end = i + Math.floor(T[i]/2);
    }
    let max = -1;
    let centerIndex = -1;
    for (let i=0;i<T.length;++i) {
        if (T[i]>max) {
            max = T[i];
            centerIndex = i;
        }
    }
    let output = newS.slice(centerIndex-Math.floor(max/2)
                                   , centerIndex+Math.floor(max/2)+1);
    return output.split('$').join('');
};

console.log(longestPalindrome("abccba"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("aca"));
