/* eslint-disable strict */
'use strict';

const bracketValidator = require('../multi-bracket-validation.js');

describe('tests our bracket validator', () => {


  let string1 = '{}[]()[()]';
  let string2 = '[[))}{';
  let string3 = '[[[]]]({[]})[]';
  let string4 = '}{)([[[]';
  let string5 = '[[[]]]({[hello]})[]';

  it('Can successfully return true if all brackets are balanced and matching', () => {
    expect(bracketValidator(string1)).toEqual(true);
    expect(bracketValidator(string3)).toEqual(true);
  });

  it('Can successfully return false if NOT all brackets are balanced and matching', () => {
    expect(bracketValidator(string2)).toEqual(false);
    expect(bracketValidator(string4)).toEqual(false);
  });

  it('Can successfully return true even if there are letters in it', () => {
    expect(bracketValidator(string5)).toEqual(true);
  });
});