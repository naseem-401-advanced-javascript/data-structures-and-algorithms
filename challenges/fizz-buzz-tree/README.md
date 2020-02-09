# Traversing a Tree

### Feature Tasks
- Write a function called FizzBuzzTree which takes a tree as an argument.
- Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- Return the tree with its new values.

### Approach
 we start with the tree.root,and then recursively traverse each left and right value. If the value of the node is  (%5 and %3 = 0), then the value gets replaced with 'FizzBuzz'. If it is %3 only, then the value gets replaced with 'Fizz', and if it is %5 only, then the value is replaced with 'Buzz'; otherwise, the value remains the same.

## Efficiency
Space: o(n)
Time: o(n)

![whiteboard](assest/3.jpg)