

class PsuedoQueue {
  constructor() {
    this.stackFirst = [];
    this.stackSecond = [];
  }

  // push the pop to empty array and  then dequeue.
  // here i implement enqueue method by using only stacks and pop()/push().

  enqueue(item) {
    this.stackFirst.push(item);
  }
  //here i implement dequeu method by pushing all items from stack 1 into stack 2, so it revers order , now pop from stack 2
  dequeue() {
    if (this.stackFirst.length === 0) {
      return 'empty';
    }
    while (this.stackFirst.length > 0) {
      let peek = this.stackFirst.pop();
      this.stackSecond.push(peek);
    }
    const result = this.stackSecond.pop();

    while (this.stackSecond.length > 0) {
      let peek = this.stackSecond.pop();
      this.stackFirst.push(peek);
    }
    return result;
  }
}
module.exports = PsuedoQueue;
