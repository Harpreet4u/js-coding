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

    postOrderTraversalIterative() {
        const stack = [];
        const printStack = [];
        const res = [];
        stack.push(this.root);

        while(stack.length > 0) {
            const node = stack.pop();
            printStack.push(node);

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }
        }

        while(printStack.length) {
            const node = printStack.pop();
            console.log(node.value);
            res.push(node.value);
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

const res = tree.postOrderTraversalIterative();
const expectedRes =  [ 10, 40, 41, 45, 75, 50, 42 ];
res.forEach((val, idx) => {
    if (val !== expectedRes[idx]) {
        console.log("Wrong post order traversal");
    }
});
