'use strict';
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

    includes(value) {
        let currentNode = this.head;
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
        let linkedListStreng = '';
        while (currentNode) {
            linkedListStreng += ` ${currentNode.value} ->`;
            currentNode = currentNode.next;
        }
        return linkedListStreng += ` NULL`;
    }

    insertBefore(value, newVal) {
        let newNode = new Node(newVal);
        let currentNode = this.head;
        let preNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                if (preNode === null) {
                    this.head = newNode;
                } else {
                    preNode.next = newNode;
                }
                newNode.next = currentNode;
                break;
            }
            preNode = currentNode;
            currentNode = currentNode.next;
        }

    }

    insertAfter(value, newVal) {
        let savedNode = null;
        let newNode = new Node(newVal);
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                savedNode = currentNode.next;
                currentNode.next = newNode;
                newNode.next = savedNode;
            }
            currentNode = currentNode.next;

        }
    }
    kthFromEnd(k){
        let currentNode = this.head;
        let length=0;
        while (currentNode) {
            length++
            currentNode=currentNode.next;
        }
        let demandedNode = length-1-k;
        if (demandedNode <0||k<0) {
            return "exception"; 
        }
        currentNode= this.head;
        while (demandedNode>0) {
            demandedNode--;
            currentNode=currentNode.next;
        }
        return currentNode.value;
    }

    mergeLists(list1,list2){
        let currentNode1 = list1.head;
        let currentNode2 =list2.head;

        while(currentNode1||currentNode2){
            if (currentNode1){
                this.insert(currentNode1.value);
                currentNode1=currentNode1.next;
            }
            if(currentNode2){
                this.insert(currentNode2.value);
                currentNode2=currentNode2.next;
            }
        }
        return this;
    }

}



module.exports = LinkedList;