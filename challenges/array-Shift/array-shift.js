'use strict';

/**
 * @param  {array} array
 * @param  {} value
 * @param  {} {if(!array||!value.........
 * @returns {array}
 */
function insertShiftArray(array, value) {
  if (!array || !value) {
    throw new Error('`insertShiftArray` error:hhh');
  } else if (!Array.isArray(array)) {
    throw new Error('`insertShiftArray` error: nnnn');
  }

  const result = [];
  const midpoint = Math.ceil(array.length / 2) - 1;

  for (let i = 0; i < array.length; i++) {
    if (i < midpoint) {
      result[i] = array[i];
    }

    if (i === midpoint) {
      result[i] = array[i];
      result[i + 1] = value;
    }

    if (i > midpoint) {
      result[i + 1] = array[i];
    }
  }

  return result;
}

module.exports = exports = insertShiftArray;