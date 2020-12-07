"use strict";

// complexity O(n)

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

    preOrderTraversalIterative() {
        const stack = [];
        const res = []
        stack.push(this.root);

        while(stack.length > 0) {
            const node = stack.pop();
            console.log(`Node value: ${node.value}`);
            res.push(node.value);

            if (node.right) {
                stack.push(node.right);
            }

            if (node.left) {
                stack.push(node.left);
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

const res = tree.preOrderTraversalIterative();
const expectedRes =  [ 42, 41, 10, 40, 50, 45, 75 ];
res.forEach((val, idx) => {
    if (val !== expectedRes[idx]) {
        console.log("Wrong pre order traversal");
    }
});
