"use strict";

// complexity: O(n) in average case and O(n^2) in worst case random pivot selection, by proof it won't be n^2

const select = (data, left, right, k, ans) => {
    // [] array case
    if (left > right) {
        return;
    }

    // base case of single element array
    if (left === right) {
        ans.b = data[left];
        return;
    }

    const pivot = partition(data, left, right);
    // for even case
    if (pivot === k-1) {
        ans.a = data[pivot];
        if (ans.b) {
            return;
        }
    }
    // for odd
    if (pivot === k) {
        ans.b = data[pivot];
        if (ans.a) {
            return;
        }
    }

    if (pivot >= k) {
        return select(data, left, pivot - 1, k, ans);
    }
    return select(data, pivot+1, right, k, ans);
};

const partition = (data, left, right) => {
    const randomElementIndex = Math.floor((Math.random() * (right-left) + left));
    [data[randomElementIndex], data[right]] = [data[right], data[randomElementIndex]];

    let i = left;
    let j = i;
    while (j < right) {
        if (data[j] <= data[right] ) {
             [data[i], data[j]] = [data[j], data[i]];
             i+=1;
        }
        j+=1;
    }
    [data[i], data[right]] = [data[right], data[i]];

    return i;
};

//const data =[12, 3, 5, 7, 4, 19];
const data =[];
//const data =[12, 3, 5, 7, 4, 19, 2];
const ans = {a: null, b: null};

console.log(data.length-1);
if (data.length % 2 !== 0) {
    console.log(select(data, 0, data.length-1, Math.floor(data.length/2), ans));
    console.log(ans.b);

} else {
    console.log(select(data, 0, data.length-1, Math.floor(data.length/2), ans));
    console.log(ans);
    console.log((ans.a+ans.b)/2);
}
