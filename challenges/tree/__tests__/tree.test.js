/* eslint-disable no-unused-vars */
/* eslint-disable strict */
'use strict';
const { Node,BinaryTree,BinarySearchTree } = require('../tree.js');


describe('tree',()=>{
  it('successfully instantiate an empty tree',()=>{
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node',()=>{
    let tree = new BinaryTree(1);
    expect(tree.root).toEqual(1);
  });
});

describe('BinaryTree', () => {
  let tree = null;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.right = six;

    tree = new BinaryTree(one);
  });
  it('preOrder', () => {
    let expected = [1, 2, 4, 5, 3, 6];
    expect(tree.preOrder()).toEqual(expected);
  });
  it('inOrder', () => {
    let expected = [4, 2, 5, 1, 3, 6];
    expect(tree.inOrder()).toEqual(expected);
  });
  it('postOredr', () => {
    let expected = [4, 5, 2, 6, 3, 1];
    expect(tree.postOrder()).toEqual(expected);

  });

});

describe('Binary Search Tree',()=>{

  it('Can successfully add a left child and right child to a single root node',()=>{
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    expect(tree.root.value).toEqual(4);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(5);

  });
});

