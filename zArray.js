"use strict";

/*
Z array stores substrings starting from i which are prefixes of original string.

can use this algo for finding sum of common prefixes of all suffixes of string with original string. (string similarity)
 */

// Explanation: https://youtu.be/4iz9JOkF3nk
// Complexity: O(n) linear

const getZ = (str) => {
    const n = str.length;
    let l = 0, r = 0;
    const Z = [n];
    for (let i=1;i<n;++i) {
        // Condition 1
        if (i>r) {
            l = i;
            r = i;
            while (r<n && str[r-l] === str[r]) {
                r++;
            }
            r--;
            Z[i] = r-l+1;
        } else {
            // Condition 2 - i is in between l and r
            const j = i-l;
            if (Z[j]<r-i+1) {
                Z[i] = Z[j];
            } else {
                l = i;
                while (r<n && str[r-l] === str[r]) {
                    r++;
                }
                r--;
                Z[i] = r-l+1;
            }
        }
    }
    return Z;
};


console.log(getZ("abcabcdabcabcf"));
console.log(getZ("ababaa"));
