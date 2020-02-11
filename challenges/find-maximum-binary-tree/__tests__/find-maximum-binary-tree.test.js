/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable strict */
'use strict';

const { Node, BinaryTree } = require('../find-maximum-binary-tree');

describe('breadth-first', () => {
    let tree;
    beforeEach(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);

        one.left = two;
        one.right = three;
        two.left = six;
        two.right = five;
        three.right = four;

        tree = new BinaryTree(one);
    });
    it('should return an array with the proper values', () => {
        let expected = 6;
        tree.breadthFirst(tree.root)
        expect(tree.findMaximumValue()).toEqual(expected);
    });
});