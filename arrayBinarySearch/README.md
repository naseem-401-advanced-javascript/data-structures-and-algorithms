

## Code Challenge 03: Array Binary Search
[PR](https://github.com/naseem-401-advanced-javascript/data-structures-and-algorithms/tree/master)


# Array Binary Search
Return the index of an element in an array if it exists, else -1. Use a binary search method to find your result.

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
I declared variables `high`, `low`, and `mid`. and ues if , to check if the `mid` value matches the target `value`. If it does not, we update our `high` and `low` values to virtually "split" the array into halves, until `low <= high`. Once `array[mid] === value`, we return `mid`. If the `if` didnot match for the target `value`, we return `-1`.

## Solution
![whiteboard](../../assest/WhatsApp Image 2020-01-21 at 16.39.17.jpeg)