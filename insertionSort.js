"use strict";

// Complexity is O(n^2), good for almost already sorted and small range of numbers.


const sort = (data) => {
   
    for (let i=0;i<data.length;++i) {
        let pivotValue = data[i];
        let j;
        for (j=i-1; j > -1 && data[j] > pivotValue; --j) {
            data[j+1] = data[j];
        }
        data[j+1] = pivotValue;
    }
    return data;
};


console.log(sort([9, 8, 4, 10, 34, 0, 4, 5]));

const data = [];
for (let i=0;i<100;++i) {
    data.push(Math.floor(Math.random()*1000));
}

console.log(sort(data));
