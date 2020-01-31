'use strict';
const LinkedList = require('../revers.js');

let ll;

describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList();
    });

    it(' Reverse a Linked List', () => {
        ll.insert(1)
        ll.insert(2)
        ll.insert(3)
        ll.insert(4)
        expect(ll.reverse().toString()).toEqual(' 4 -> 3 -> 2 -> 1 -> NULL')
    });
}); 
