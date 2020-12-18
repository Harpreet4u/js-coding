"use strict";

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    // O(1)
    insert(data) {
        const newNode = new SinglyLinkedList(data);
        this.size++;
        if (!!this.head) {
            this.head = newNode;
            return;
        }
        const temp = this.head;
        this.head = newNode;
        this.head.next = temp;
    }

    // O(n)
    remove(value) {
        let currentHead = this.head;
        if (this.head.data === value) {
            this.head = currentHead.next;
            currentHead.next = null;
            this.size--;
            return;
        }
        let previous = currentHead;
        while (currentHead.next) {
            if (currentHead.data === value) {
                previous.next = currentHead.next;
                previous = currentHead;
                currentHead = currentHead.next;
                break;
            }
            previous = currentHead;
            currentHead = currentHead.next;
        }
        this.size--;
    }

    // O(n)
    search(value) {
        let currentHead = this.head;
        while(currentHead.next) {
            if (currentHead.data === value) {
                return true;
            }
            currentHead = currentHead.next;
        }
        return this.head && this.head.data === value;
    }
}

