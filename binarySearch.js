"use strict";

// Complexity O(log(n)) - this makes lesser comparisons

const binarySearch  = (data, start, end, key) => {
    while ((end-start) > 1) {
        // L + (R-L)/2 to avoid overflow e.g. chars is 255 and L=100 R=200 will overflow in (L+R)/2
        const mid = start + Math.floor((end-start)/2);

        if (data[mid]<=key) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (key === data[start]) {
        return start;
    } else if (key === data[end]) {
        return end;
    }
    return -1;
};

const data = [ 2, 3, 4, 10, 40 ];

console.log(binarySearch(data, 0, data.length-1, 50));
