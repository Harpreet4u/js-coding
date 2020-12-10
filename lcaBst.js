"use strict";


// Complexity O(h) height of tree

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const lca = (root, key1, key2) => {
    if (!root) {
        return root;
    }

    if (root.value > key1 && root.value > key2) {
        return lca(root.left, key1, key2);
    }
    if (root.value < key1 && root.value < key2) {
        return lca(root.right, key1, key2);
    }
    return root;
}

const search = (root, val) => {
    if (!root || root.value === val) {
        return root;
    }

    if (val < root.value) {
        return search(root.left, val);
    }

    if (val > root.value) {
        return search(root.right, val);
    }
};

const root = new Node(20)
root.left = new Node(8)
root.right = new Node(22)
root.left.left = new Node(4)
root.left.right = new Node(12)
root.left.right.left = new Node(10)
root.left.right.right = new Node(14)

let n1 = 10;
let n2 = 14;
let result = (search(root, n1) && search(root, n2)) ? lca(root, n1, n2) :  null;

console.log(`LCA of ${n1} and ${n2} is ${result.value}`);

n1 = 14 ; n2 = 8
result = (search(root, n1) && search(root, n2)) ? lca(root, n1, n2) :  null;
console.log(`LCA of ${n1} and ${n2} is ${result.value}`);

n1 = 10 ; n2 = 22
result = (search(root, n1) && search(root, n2)) ? lca(root, n1, n2) :  null;
console.log(`LCA of ${n1} and ${n2} is ${result.value}`);

n1 = 0 ; n2 = 22
result = (search(root, n1) && search(root, n2)) ? lca(root, n1, n2) :  null;
console.log(`LCA of ${n1} and ${n2} is ${result ? result.value : null}`);
