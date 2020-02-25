/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';

const mergeSort = require('../mergeSort.js');

describe('Merge sorting', () => {
    it('sort unsorted array', () => {
        const testArray = [8, 4, 23, 42, 16, 15];
        expect(mergeSort(testArray)).toEqual([4, 8, 15, 16, 23, 42]);
    });
    it('sort an empty array', () => {
        const testArray = [];
        expect(mergeSort(testArray)).toEqual([]);
    });

    it('sort an unsorted array with duplicate values', () => {
        const testArray = [5, 12, 7, 5, 5, 7];
        expect(mergeSort(testArray)).toEqual([5, 5, 5, 7, 7, 12]);
    });
});
