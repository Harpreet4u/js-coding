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

    inOrderTraversalIterative() {
        const stack = [];
        let current = this.root;
        let done = false;
        const res = [];

        while(!done) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                if (stack.length > 0) {
                    const node = stack.pop();
                    console.log(node.value);
                    res.push(node.value);
                    current = node.right;
                } else  {
                    done = true;
                }
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

const res = tree.inOrderTraversalIterative();
const expectedRes =  [ 10, 41, 40, 42, 45, 50, 75 ]
res.forEach((val, idx) => {
    if (val !== expectedRes[idx]) {
        console.log("Wrong in order traversal");
    }
});
