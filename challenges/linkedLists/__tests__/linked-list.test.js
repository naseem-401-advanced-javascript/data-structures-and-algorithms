'use strict';

const LinkedList = require('../linked-list.js');

let ll;
describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('Can successfully instantiate an empty linked list', () => {
        expect(ll.head).toBeNull()
    });

    it('Can properly insert into the linked list', () => {
        ll.insert(5)
        expect(ll.head.value).toEqual(5)
    });

    it('The head property will properly point to the first node in the linked list', () => {
        ll.insert('this is the head');
        ll.insert(3);
        ll.insert(6);
        expect(ll.head.value).toEqual('this is the head')
    });

    it('Can properly insert multiple nodes into the linked list', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        expect(typeof ll.head.next).toMatch('object')
    });

    it('Will return true when finding a value within the linked list that exists', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('fuzz')).toBeTruthy()
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('nnn')).toBeFalsy()
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.toString()).toMatch('foo -> fuzz -> buzz -> NULL')
    });

    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('fuzz', 'newVal')
        expect(ll.toString()).toMatch('foo -> newVal -> fuzz -> buzz -> NULL')
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('foo', 'newVal')
        expect(ll.toString()).toMatch('newVal -> foo -> fuzz -> buzz -> NULL')
    });

    it('Can successfully insert after a node in the middle of the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('fuzz', 'newVal')
        expect(ll.toString()).toMatch('foo -> fuzz -> newVal -> buzz -> NULL')
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('buzz', 'newVal')
        expect(ll.toString()).toMatch('foo -> fuzz -> buzz -> newVal -> NULL')
    });
}); 
