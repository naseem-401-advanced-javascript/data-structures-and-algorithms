'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this

    }

    includes(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    toString() {
        let currentNode = this.head;
        let linkedListStreng = ''
        while (currentNode) {
            linkedListStreng += ` ${currentNode.value} ->`;
            currentNode = currentNode.next;
        }
        return linkedListStreng += ` NULL`;
    }
}
module.exports = LinkedList;