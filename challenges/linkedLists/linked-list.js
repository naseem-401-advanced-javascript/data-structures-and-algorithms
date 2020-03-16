/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    toArray(){
        let currentNode = this.head;
        let arr = [];
        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

function palindrom(ll) {
    let current = ll.head;
    let arr = [];
    let x;
    while(current){
        arr.push(current.value);
        current = current.next;
    }

    let j = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    for (let i = 0; i < mid; i++) {
        if(arr[i] === arr[j]){
            x = true;
        } else {
            x = false;
        }
        j--;
    }
    return x;
}

function reverse(ll) {
    let current = ll.head;
    if(!current) return null;
    if(!current.next) return current.value;

    let pre = null;
    while(current){
        let temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;
    }
    return pre;
}

function checkSorted(ll) {
    let pre = ll.head;
    let current = pre.next;
    let x;
    while (pre) {
        if(current === null) {
            console.log(pre.value);
            return true;
        }
        if (current.value >= pre.value) {
            current = current.next;
            pre = pre.next;
            x = true;
        } else {
            x = false;
            break;
        }
      }
return x;
}

function merge(l1, l2) {

    // create new linked list pointer
    var l3 = new LinkedList();

    let current1 = l1.head;
    let current2 = l2.head;

    // while both linked lists are not empty
    while (current1 !== null && current2 !== null) {
      if (current1.value <= current2.value) {
        l3.insert(current1.value);
        current1 = current1.next;
      } else {
        l3.insert(current2.value);
        current2 = current2.next;
      }
    }

    // once we reach end of a linked list, append the other
    // list because we know it is already sorted
    if (current1 === null) { l3.insert(current2.value); }
    if (current2 === null) { l3.insert(current1.value); }

    // return the sorted linked list
    return l3;

}


const nas1 = new LinkedList();
const nas2 = new LinkedList();

const ll = new LinkedList();
ll.insert(9);
ll.insert(7);
ll.insert(5);
ll.insert(6);
ll.insert(6);
ll.insert(7);
ll.insert(9);

nas1.insert(13);
nas1.insert(20);
nas1.insert(31);

nas2.insert(12);
nas2.insert(22);
nas2.insert(33);

console.log('nasa', merge(nas1,nas2));

module.exports = LinkedList;