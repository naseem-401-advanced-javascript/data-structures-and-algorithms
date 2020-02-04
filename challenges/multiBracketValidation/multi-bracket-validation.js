/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */

'use strict';

function multiBracketValidation(string) {
  let Brackets = [];
  let characters = [];
  let keyValuePairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < string.length; i++) {
    // opener
    if (string[i] === '[' || string[i] === '{' || string[i] === '(') {
      Brackets.push(string[i]);
    }
    //the characters
    else if (string[i].match(/^[A-Za-z]+$/)) {
      characters.push(string[i]);
    }
    else {
      let lastOpener = Brackets.pop();
      if (string[i] !== keyValuePairs[lastOpener]) {
        return false;
      }
    }
  }
  if (Brackets.length !== 0) {
    return false;
  }
  return true;
}
module.exports = multiBracketValidation;
