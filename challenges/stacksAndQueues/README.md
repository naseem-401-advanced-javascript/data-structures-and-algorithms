# Stacks and Queues

* Stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

* Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle

## Challenge

* The goal is to create methods to each the stack and the queue, these are the basic methods can applied on each.

## Approach & Efficiency

* To make the test cleaner, we create an extra method that convert each stack and queue to an array.
* Every method has been tested and approve their effectiveness on the classes

## API

### Stacks:

* `push` : can add one or multi elements to a stack
* `pop` : can take off and return the last element (top) from a stack
* `peek` : return back the value of the last elemnt that pushed into a stack
* `isEmpty` : check if the stack is empty or not

### Queues:

* `enqueue` : can add one or multi elements to a queue.
* `dequeue` : can take off and return the last element (front) from a queue.
* `peek` : return back the value of the last elemnt that enqueued into a queue.
* `isEmpty` : check if the queue is empty or not.

## Big O:
### Stacks:
Push O(1)
Pushing a Node onto a stack will always be an O(1) operation. This is because it takes the same amount of time no matter how many Nodes (n) you have in the stack.

Pop O(1)
Popping a Node off a stack is the action of removing a Node from the top. When conducting a pop, the top Node will be re-assigned to the Node that lives below and the top Node is returned to the user.

Peek O(1)
When conducting a peek, you will only be viewing the top Node of the stack. Traditionally, you always want to peek before conducting a pop. This will ensure that you do not receive a NullExceptionError on your pop action.

###  Queues:
Enqueue O(1)
When you add an item to a queue, you use the enqueue action. This is done with an O(1) operation in time because it does not matter how many other items live in the queue (n); it takes the same amount of time to perform the operation.

Dequeue O(1)
When you remove an item from a queue, you use the dequeue action. This is done with an O(1) operation in time because it doesn’t matter how many other items are in the queue, you are always just removing the front Node of the queue.

Peek O(1)
When conducting a peek, you will only be viewing the front Node of the queue. Traditionally, you always want to peek before conducting a dequeue. This will ensure that you do not receive a NullExceptionError on your dequeue action.


