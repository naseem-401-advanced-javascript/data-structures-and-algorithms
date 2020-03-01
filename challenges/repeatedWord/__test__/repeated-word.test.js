/* eslint-disable strict */
'use strict';
// eslint-disable-next-line no-unused-vars
const repeatedWord = require('../repeated-word.js');

describe(`Repeating words`, () => {
  it('test one', () => {
    let str = 'i have one and you have one';
    expect(repeatedWord(str)).toEqual('have');
  });

  it('test two', () => {
    let str = 'i have but you';
    expect(repeatedWord(str)).toEqual('no repeted repeatedWord');
  });

  it('test three', () => {
    let str = 'i have a hundred and you are hundred';
    expect(repeatedWord(str)).toEqual('hundred');
  });
});