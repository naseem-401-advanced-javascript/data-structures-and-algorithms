
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

  toString() {
    let currentNode = this.head;
    let linkedListStreng = '';
    while (currentNode) {
      linkedListStreng += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    return linkedListStreng += ` NULL`;
  }

  reverse() {
    let currentNode = this.head;
    let listArr = [];
    let resultList = new LinkedList();

    while (currentNode) {
      listArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    for (let i = listArr.length - 1; i >= 0; i--) {
      resultList.insert(listArr[i]);
    }
    return resultList;
  }
}

const ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
console.log('sssss', ll.reverse());

module.exports = LinkedList;