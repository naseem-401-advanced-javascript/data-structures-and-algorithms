'use strict';

const insertShiftArray = require('../array-shift.js');

describe('`insertShiftArray` function', () => {
  describe('validate input', () => {
    it('should throw an error if it receives no arguments', () => {
      expect(() => insertShiftArray()).toThrow();
    });
    it('should throw an error if there is only one argument', () => {
      expect(() => insertShiftArray([1])).toThrow();
    });

    it('should throw an error if the first argument is not an array', () => {
      expect(() => insertShiftArray('hi', 2)).toThrow();
    });
    it('should throw an error if there are more than 2 arguments', () => {
      expect(insertShiftArray([1, 3], 2, 4, 5)).toEqual([1, 2, 3]);
    });
  });
  describe('validate output', () => {
    it('should insert the target `val` in the middle of an even-length `arr`', () => {
      expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    });
    it('should insert the target `val` just after the middle of an odd-length `arr`', () => {
      expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
  });
});