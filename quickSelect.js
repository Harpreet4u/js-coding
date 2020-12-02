"use strict";

// Complexity O(n)

const quickSelect = (data, left, right, k) => {
    const pivot = partition(data, left, right);
    if (pivot-1 === k-1) {
        return data[pivot-1];
    }
    if (pivot-1 > k-1) {
        return quickSelect(data, left, pivot-1, k);
    } else {
        return quickSelect(data, pivot, right, k);
    }
};

const partition = (data, left, right) => {
    const mid = data[Math.floor((left+right)/2)];

    while (left <= right) {
        while(data[left] < mid) {
            left++;
        }
        while(data[right]>mid) {
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

const quickSort = (data, left, right) => {
    const pivot = partition(data, left, right);
    if (left < pivot-1) {
        quickSort(data, left, pivot-1);
    }
    if (right > pivot) {
        quickSort(data, pivot, right);
    }
    return data;
};

for (let i=0;i<10000;++i) {
    const data = [];
    for (let j=0;j<10;++j) {
        data.push(getRandomNumber(100));
    }
    const sortedData = Array.from(data);
    quickSort(sortedData, 0, sortedData.length-1);
    //console.log(sortedData);
    for (let k=0;k<data.length;++k) {
        const res = quickSelect(data, 0, data.length-1, k+1);
        if (sortedData[k] !== res) {
            console.log("Error in quick Select Algo: "+sortedData[k]+" : "+res);
        }
    }
}
