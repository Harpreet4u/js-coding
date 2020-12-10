"use strict";

// Complexity O(h) height of tree

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const lca = (root, key1, key2, visited) => {
    if (!root) {
        return null;
    }
    if (root.value === key1) {
        visited[key1] = true;
        return root;
    }
    if (root.value === key2) {
        visited[key2] = true;
        return root;
    }

    const leftSide = lca(root.left, key1, key2, visited);
    const rightSide = lca(root.right, key1, key2, visited);

    if (leftSide && rightSide) {
        return root;
    }

    return leftSide ? leftSide : rightSide;
}

const lcaUtil = (root, key1, key2) => {
    const visited = {[key1]: false, [key2]: false};
    const lcaRoot = lca(root, key1, key2, visited);

    if (visited[key1] && visited[key2] || visited[key1] && search(lcaRoot, key2) || visited[key2] && search(lcaRoot, key1)) {
        return lcaRoot;
    }
    return null;
};

const search = (root, val) => {
    if (!root) {
        return false;
    }
    return root.value === val || search(root.left, val) || search(root.right, val);
};

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

let res = lcaUtil(root, 4, 5);

if (res) {
    console.log(`LCA(4, 5) = ${res.value}`);
} else {
    console.log("Keys are not present");
}

res = lcaUtil(root, 4, 10);
if (res) {
    console.log(`LCA(4,10) = ${res.value}`);
} else {
    console.log("Keys are not present");
}
