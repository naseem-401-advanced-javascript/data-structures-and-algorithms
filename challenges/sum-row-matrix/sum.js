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

// function fibSeq(num) {
//     let array = [0, 1]
//     for (let i = 0; i < Math.abs(num) - 1; i++) {
//         array[i + 2] = array[i] + array[i + 1]
//     }
//     if (num >= 0) {
//         return array[num]
//     }
//     if (num < 0) {
//         if (Math.abs(num) % 2 === 0) {
//             return -array[Math.abs(num)]
//         } else {
//             return array[Math.abs(num)]
//         }
//     }
// }



module.exports = { sumMatrix, fibSeq };
