
const  PseudoQueue = require('../queue-with-stacks');
let pseudoQueue = new PseudoQueue();

describe('test the class of pseudoqueue',()=>{
  beforeEach(()=>{
    pseudoQueue = new PseudoQueue();
  });
  it('It should successfully enqueue items', () => {
    pseudoQueue.enqueue('10');
    pseudoQueue.enqueue('15');
    pseudoQueue.enqueue('20');
    expect(pseudoQueue.stackFirst).toEqual(['10', '15', '20']);
  });
  it('It should successfully dequeue items', () => {
    pseudoQueue.enqueue('10');
    pseudoQueue.enqueue('15');
    pseudoQueue.enqueue('20');
    pseudoQueue.dequeue();
    console.log(pseudoQueue.stackFirst);
    expect(pseudoQueue.stackFirst).toEqual(['15', '20']);
  });
  it('It should successfully dequeue all items', () => {
    pseudoQueue.enqueue('10');
    pseudoQueue.enqueue('15');
    pseudoQueue.enqueue('20');
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.stackFirst).toEqual([]);
  });
});