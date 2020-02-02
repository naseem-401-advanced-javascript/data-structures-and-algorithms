'use strict';
class Node {
    constructor(value){
        this.value= value;
        this.next =null;
    }
}

class Stack{
    constructor(){
    this.top = null;
    }
    push(value){
        let newNode =new Node (value);
        newNode.next= this.top;
        this.top= newNode;
    }
    pop(){
        if(this.top===null){
            return null;
        }
        const topNode = this.top;
        this.top = topNode.next;
        return topNode.value;
    }
    peek(){
    if(this.top ===null){
return null;
        }else{
            return this.top.value;
        }
    }
    isEmpty(){
        return this.top ===null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null
    };
    enqueue(val) {
        let node = new Node(val);
        node.next = this.back;
        this.back = node;
        if (this.front === null) {
            this.front = node
        };
    };
    dequeue() {
        if (this.front === null) {
            return this.front
        };
        const frontNode = this.front;
        if (this.back !== this.front) {
            let currentNode = this.back;
            while (currentNode !== this.front) {
                currentNode = currentNode.next
            };
            this.front = currentNode;
            this.front.next = null;
        } else {
            this.front = null;
            this.back = null;
        }
        return frontNode.value
    };
    peek() {
        return this.front === null ? null : this.front.value;
    };
    isEmpty() {
        return this.front === null;
    };
}