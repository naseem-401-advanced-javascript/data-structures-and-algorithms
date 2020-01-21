'use strict';

const binarySearch = require('../array-binary-search.js');

describe('`binarySearch` function', () => {
  const array = [0, 1, 2, 3, 4];
  describe('input validation', () => {
    it('should return `-1` if the first argument is not an array', () => {
      const str = 'str';
      const value = 0;
      expect(binarySearch(str, value)).toBe(-1);
    });
    it('should return `-1` if the second argument is an Object', () => {
      const value = {};
      expect(binarySearch(array, value)).toBe(-1);
    });
    it('should return `-1` if the second argument is an Array', () => {
      const value = ['value'];
      expect(binarySearch(array, value)).toBe(-1);
    });
    it('should return `-1` if the second argument is a Function', () => {
      const value = function() {};
      expect(binarySearch(array, value)).toBe(-1);
    });
    it('should return `-1` if the second argument is undefined', () => {
      expect(binarySearch(array)).toBe(-1);
    });
  });
  describe('output validation', () => {
    it('should return the index of the array element that is equal to the search key if the element is in the middle of the array', () => {
      const value = 2;
      expect(binarySearch(array, value)).toBe(2);
    });

    it('should return the index of the array element that is equal to the search key if the element is before the middle of the array', () => {
      const r = [0, 1, 2, 3, 4];
      const value = 1;
      expect(binarySearch(r, value)).toBe(1);
    });
    it('should return the index of the array element that is equal to the search key if the element is after the middle of the array', () => {
      const value = 3;
      expect(binarySearch(array, value)).toBe(3);
    });
    it('should return -1 if the element is not in the array', () => {
      const value = 100;
      expect(binarySearch(array, value)).toBe(-1);
    });
  });
});