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
  }
  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  postOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addNode(value, this.root);
  }
  _addNode(value, node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      } else {
        this._addNode(value, node.right);
        return;
      }
    }
    if (value <= node.value) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      } else {
        this._addNode(value, node.left);
        return;
      }
    }
  }
  contains(value) {
    return this._containsNode(value, this.root);
  }
  _containsNode(value, node) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    } else if (node.value < value) {
      return this._containsNode(value, node.right);
    } else if (node.value >= value) {
      return this._containsNode(value, node.left);
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };