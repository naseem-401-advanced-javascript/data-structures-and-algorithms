'use strict';

const functions = require('../lib/sum-matrix.js')

describe('Functions of the two interviews', () => {
    describe('Sum Matrix Test', () => {

        it('Sould sum all element of an array that is an element to an other', () => {
            const array = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
            expect(functions.sumMatrix(array)).toEqual([6, 15, 18])
        })
    })
})