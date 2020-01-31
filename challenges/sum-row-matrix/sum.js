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


/// with Ibrahim
function fibSeq(num) {
    let arr = [0, 1];
    for (let i = 0; i < Math.abs(num) - 1; i++) {
        arr[i + 2] = arr[i] + arr[i + 1];
    };
    if (num >= 0) {
        return arr[num];
    };
    if (num < 0) {
        if (Math.abs(num) % 2 === 0) {
            return -arr[Math.abs(num)];
        } else {
            return arr[Math.abs(num)];
        };
    };
};

export default { sumMatrix, fibSeq }
