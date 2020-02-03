# Queues With Stacks

### Feature Tasks
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.


## Challenge Description
* A queue can be implemented using two stacks. Let queue to be implemented be q and stacks used to implement q be stack1 and stack2.

## Approach & Efficiency
- `enqueue` : adding an element to a queue using one array's method (big O(1))
- `dequeue` : removing an element from a queue using two array's methods.(big O(2))

### Testing

- It should successfully enqueue items
- It sould successfully dequeue and item
- It should succesfully dequeue all items

### UML
[](assest/ch11.jpeg)