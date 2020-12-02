"use strict";

// complexity is O(nlog) and space complexity is also O(n) for creating extra array in merge

const mergeSort = (data) => {
  if (data.length < 2) {
      return data;
  }
  const midPoint = Math.floor(data.length/2);
  return merge(mergeSort(data.slice(0, midPoint)), mergeSort(data.slice(midPoint)));
};

const merge = (data1, data2) => {
    let left = 0, right = 0;
    const newData = [];
    while(left < data1.length && right < data2.length) {
        if (data1[left] < data2[right]) {
            newData.push(data1[left]);
            left++;
        } else {
            newData.push(data2[right]);
            right++;
        }
    }
    return [...newData, ...data1.slice(left), ...data2.slice(right)];
};

const getRandomNumber = (n) => Math.floor(Math.random()*n);

const verifySort = (res) => {

    for (let i=0;i<res.length;++i) {
        for (let j=i+1;j<res.length;++j) {
            if (res[i] > res[j]) {
                console.log("Not sorted correctly. " + res);
                return false;
            }
        }
    }
    return true;
};

const verifier = [];
for (let i=0;i<10000;++i) {
    const data = [];
    for (let i=0;i<getRandomNumber(1000);++i) {
        data.push(getRandomNumber(10000));
    }
    const res = mergeSort(data);
    verifier.push(verifySort(res));
}

console.log(verifier.reduce((res, value) => res && value, true) ? "All iz well" : "error in algo");
