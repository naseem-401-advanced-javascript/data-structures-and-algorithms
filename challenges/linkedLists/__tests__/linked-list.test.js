/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';

const LinkedList = require('../linked-list.js');

let ll;
describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('Can successfully instantiate an empty linked list', () => {
        expect(ll.head).toBeNull();
    });

    it('Can properly insert into the linked list', () => {
        ll.insert(5);
        expect(ll.head.value).toEqual(5);
    });

    it('The head property will properly point to the first node in the linked list', () => {
        ll.insert('this is the head');
        ll.insert(3);
        ll.insert(6);;
        expect(ll.head.value).toEqual('this is the head');
    });

    it('Can properly insert multiple nodes into the linked list', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        expect(typeof ll.head.next).toMatch('object');
    });

    it('Will return true when finding a value within the linked list that exists', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('fuzz')).toBeTruthy();
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('nnn')).toBeFalsy();
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.toString()).toMatch('foo -> fuzz -> buzz -> NULL');
    });

    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('fuzz', 'newVal');
        expect(ll.toString()).toMatch('foo -> newVal -> fuzz -> buzz -> NULL');
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('foo', 'newVal');
        expect(ll.toString()).toMatch('newVal -> foo -> fuzz -> buzz -> NULL');
    });

    it('Can successfully insert after a node in the middle of the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('fuzz', 'newVal');
        expect(ll.toString()).toMatch('foo -> fuzz -> newVal -> buzz -> NULL');
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('buzz', 'newVal');
        expect(ll.toString()).toMatch('foo -> fuzz -> buzz -> newVal -> NULL');
    });

    it('test Where k is greater than the length of the linked list', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); // length of ll = 5

        expect(ll.kthFromEnd(8)).toMatch('exception');
    });

    it('test Where k and the length of the list are the same', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); // length of ll = 5

        expect(ll.kthFromEnd(5)).toMatch('exception');
    });

    it('test Where k is not a positive integer', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); // length of ll = 5

        expect(ll.kthFromEnd(-1)).toMatch('exception');
    });

    it('test Where the linked list is of a size 1', () => {
        ll.insert(5); // length of ll = 1

        expect(ll.kthFromEnd(1)).toMatch('exception');
    });

    it('test Where k is not at the end, but somewhere in the middle of the linked list', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); // length of ll = 5

        expect(ll.kthFromEnd(1)).toEqual(4);
    });
    it('check if this two lists merged correctly ',()=>{
        const list1 = new LinkedList();
        list1.insert(1);
        list1.insert(3);
        list1.insert(2);

        const list2 = new LinkedList();
        list2.insert(5);
        list2.insert(9);
        list2.insert(4);

        ll.mergeLists(list1,list2);
        expect(ll.toString()).toMatch("1 -> 5 -> 3 -> 9 -> 2 -> 4 -> NULL");
    });

}); 
