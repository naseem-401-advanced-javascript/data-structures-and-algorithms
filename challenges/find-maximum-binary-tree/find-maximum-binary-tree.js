/* eslint-disable indent */
/* eslint-disable strict */
'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
        this.result = [];
    }
    breadthFirst(currentNode) {
        let queue = [];
        queue.unshift(currentNode);

        while (queue.length > 0) {
            currentNode = queue.pop();
            this.result.push(currentNode.value);
            if (currentNode.left) queue.unshift(currentNode.left);
            if (currentNode.right) queue.unshift(currentNode.right);
        }
        return this.result;
    }
    findMaximumValue() {
        this.result.sort();
        return this.result.pop();

    }
}

module.exports = { Node, BinaryTree };