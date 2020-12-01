"use strict";

// Complexity O(nlogn) for avenrage case worst case is O(n^2)

const quickSort = (data, left, right) => {
    if (left <= right && right-left <= 1) {
        return data;
    }    
    const pivot = partition(data, left, right);
    if (left < pivot - 1) {
        quickSort(data, left, pivot-1);
    }
    if (pivot < right) {
        quickSort(data, pivot, right);
    }
    return data;
};

const partition = (data, left, right) => {
    const mid = Math.floor((left+right)/2);

    const pivot = data[mid];
    while (left < right) {
        while (data[left] < pivot) {
            left++;
        }
        while(data[right] > pivot) {
            right--;
        }
        if (left < right) {
            data[left] = data[left] + data[right];
            data[right] = data[left] - data[right];
            data[left] = data[left] - data[right];
            left++;
            right--;
        }
    }
    return left;
};

const data = [];
for (let i=0;i<10;++i) {
    data.push(Math.floor(Math.random()*100));
}
console.log(quickSort(data, 0, data.length-1));
