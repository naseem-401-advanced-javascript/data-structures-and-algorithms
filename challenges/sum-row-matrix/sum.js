'use strict';

function sumMatrix(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let newIdx = 0;
        for (let j = 0; j < array[i].length; j++) {
            newIdx = newIdx + array[i][j]
        }
        result[i] = newIdx
    }
    return result;
}





module.exports = { sumMatrix, fibSeq };
