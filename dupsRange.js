"use strict";

// Complexity: O(logN)

const getLeftMostValue = (data, left, right, key) => {
    while ((right-left)>1) {
        const mid = left + Math.floor((right-left)/2);

        if (data[mid] >= key) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
};

const getRightMostValue = (data, left, right, key) => {

    while ((right-left)>1) {
        const mid = left + Math.floor((right-left)/2);

        if (data[mid] <= key) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
};

const dupsInRange = (data, key) => {
    // boundaries are different for pointers to go to 0 or size-1
    const left = getLeftMostValue(data, -1, data.length-1, key);
    const right = getRightMostValue(data, 0, data.length, key);


    if (data[left] === key && data[right] === key) {
        return right - left + 1;
    }
    return -1;
};

console.log(dupsInRange([1, 2, 3, 3, 3, 3, 3 ,4, 5, 6, 78, 89], 89));
