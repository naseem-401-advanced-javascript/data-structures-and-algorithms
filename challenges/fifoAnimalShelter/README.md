# Fifo Animal Shelter

### Feature Tasks
* Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
* Implement the following methods:
* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
* dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

### Testing
* Can successfully add a cat to the stack
* Can successfully add a dog to the stack
* Can successfully remove a dog from the stack
* Can successfully remove a cat from the stack
* Will not dequeue anything if the pref is not dog or cat

### Big O :
This solution has a Big O notation efficiency of O(n) for time and O(1) for space.



![uml](assest/code12.jpeg)