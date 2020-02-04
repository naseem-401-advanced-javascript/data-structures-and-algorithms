# 401-data-structures-and-algorithms

## Code Challenge 05:Linked List
[PR](https://github.com/naseem-401-advanced-javascript/data-structures-and-algorithms/tree/master)

# Singly Linked List
Singly linked lists contain nodes which have a data field as well as 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.

## Challenge
The challenge asks you to create a couple of methods that deal with linked lists

## Approach & Efficiency
We create the requested methods and create a test for each method
npm run test` : to see the results of the test
`npm run lint` : to run the linter

## API
`insert()` : This method add a node to the end of the linked list (tail) or make a head for an empty one.
`includes()` : Check for the given value is in the linked list or not
`toString()` : This finction takes the value for each node and return them as a string


# Big(O) efficiency
- insert : I need to insert it at the last of the linked list so, Big O is O(n) since I am not use the tail if I used Tail the Big O it will be O(1)
- Includes : I need to check each node till I got the excat node I need so, the big O notation is O(1-n) 
- Tostring : for each node I need to convert it to string so, big O is O(n) 


![whiteboard]()
