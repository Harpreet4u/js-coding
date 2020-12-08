"use strict";

// Complexity is O(h) height of tree which is log(n)
// Rotations take constant time and height takes constant too as its cached at each node.

class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.height = 1;
        this.value = value;
    }
}

class AvlTree {

    getBalanceValue(root) {
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);
        return leftHeight - rightHeight;
    }

    getHeight(root) {
        return root ? root.height : 0;
    }

    insert(root, value) {
        if (!root) {
            root = new TreeNode(value);
            return root;
        } else if (value < root.value) {
            root.left = this.insert(root.left, value);
        } else {
            root.right = this.insert(root.right, value);
        }

        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        const balanceValue = this.getBalanceValue(root);

        // left left case
        if (balanceValue > 1 && value < root.left.value) {
            root  = this.rotateRight(root);
        }

        // right right case
        if (balanceValue < -1 && value > root.right.value) {
            root  = this.rotateLeft(root);
        }

        // left right case
        if (balanceValue > 1 && value > root.left.value) {
            root.left = this.rotateLeft(root.left);
            return this.rotateRight(root);
        }

        // right left case
        if (balanceValue < -1 && value < root.right.value) {
            root.right = this.rotateRight(root.right);
            return this.rotateLeft(root);
        }

        return root
    }

    rotateLeft(root) {
        const newRoot = root.right;
        const subTree = newRoot.left;
        newRoot.left = root;
        root.right = subTree;

        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        return newRoot;
    }

     rotateRight(root) {
        const newRoot = root.left;
        const subTree = newRoot.right;
        newRoot.right = root;
        root.left = subTree;

        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        return newRoot;
    }

    preOrder(root) {
        if (!root) return;
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root) {
        if (!root) return;
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

}

const myTree = new AvlTree();
let root = null;

root = myTree.insert(root, 10);
root = myTree.insert(root, 20);
root = myTree.insert(root, 30);
root = myTree.insert(root, 40);
root = myTree.insert(root, 50);
root = myTree.insert(root, 25);

myTree.inOrder(root);
