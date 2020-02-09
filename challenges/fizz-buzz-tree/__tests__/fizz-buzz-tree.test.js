/* eslint-disable strict */
'use strict';
// eslint-disable-next-line no-unused-vars
const {BinarySearchTree, BinaryTree, Node} = require('../fizz-buzz-tree.js');


describe(`tree traversal`, () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree(20);
    expect(tree.root.value).toBe(20);
  });

  it('Can successfully change the values to fizz and buzz and fizzbuzz', () => {
    const tree = new BinarySearchTree(null);
    tree.add(20);
    tree.add(10);
    tree.add(4);
    tree.add(7);
    tree.add(30);
    tree.add(24);
    tree.fizzBuzzTree(tree.root);
    expect(tree.root.value).toBe('Buzz');
    expect(tree.root.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe('FizzBuzz');
  });

  it('Can successfully change the values to fizz and buzz and fizzbuzz', () => {
    const tree = new BinarySearchTree(null);
    tree.add(13);
    tree.add(10);
    tree.add(4);
    tree.add(7);
    tree.add(30);
    tree.add(24);
    tree.fizzBuzzTree(tree.root);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe('FizzBuzz');
  });
});
