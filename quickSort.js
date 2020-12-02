"use strict";

// Complexity O(nlogn) for avenrage case worst case is O(n^2)

const quickSort = (data, left, right) => {
    if (left < right) {
        const pivot = partition(data, left, right);
        if (left < pivot - 1) {
            quickSort(data, left, pivot-1);
        }
        if (pivot < right) {
            quickSort(data, pivot, right);
        }
    }
    return data;
};

const partition = (data, left, right) => {
    const mid = Math.floor((left+right)/2);

    const pivot = data[mid];
    while (left <= right) {
        while (data[left] < pivot) {
            left++;
        }
        while(data[right] > pivot) {
            right--;
        }
        if (left <= right) {
            const temp = data[left];
            data[left] = data[right];
            data[right] = temp;
            left++;
            right--;
        }
    }
    return left;
};

const getRandomNumber = (n) => Math.floor(Math.random()*n);

const verifySort = (res) => {

    for (let i=0;i<res.length;++i) {
        for (let j=i+1;j<res.length;++j) {
            if (res[i] > res[j]) {
                console.log("Not sorted correctly. " + res);
            }
        }
    }
};

for (let i=0;i<10000;++i) {
    const data = [];
    for (let i=0;i<getRandomNumber(1000);++i) {
        data.push(getRandomNumber(10000));
    }
    const res = quickSort(data, 0, data.length-1);
    verifySort(res);
}
