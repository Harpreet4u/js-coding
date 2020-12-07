"use strict";

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    levelOrderTraversalIterative() {
        const queue = [];
        const res = [];
        if (!this.root) return res;
        queue.push(this.root);

        while(queue.length > 0) {
            const node = queue.shift();
            res.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return res;
    }
}

const tree = new BinaryTree();
tree.root = new Node(42);
tree.root.left = new Node(41);
tree.root.right = new Node(50);

tree.root.left.left= new Node(10);
tree.root.left.right= new Node(40);

tree.root.right.right= new Node(75);
tree.root.right.left= new Node(45);

const res = tree.levelOrderTraversalIterative();
const expectedRes =  [ 42, 41, 50, 10, 40, 45, 75 ];
res.forEach((val, idx) => {
    if (val !== expectedRes[idx]) {
        console.log("Wrong post order traversal");
    }
});
