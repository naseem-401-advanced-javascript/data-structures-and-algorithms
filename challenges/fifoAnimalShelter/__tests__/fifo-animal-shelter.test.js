/* eslint-disable strict */
'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');
let newAnimalShelter = new AnimalShelter();

let catOne = { name: 'karal', type: 'cat' };
let catTwo = { name: 'sherazi', type: 'cat' };
let dogOne = { name: 'max', type: 'dog' };
let dogTwo = { name: 'sarmd', type: 'dog' };



describe('tests our nodes', () => {

  beforeEach(() => {
    newAnimalShelter = new AnimalShelter();
  });

  it('Can successfully add a cat to the stack', () => {
    newAnimalShelter.enqueue(catOne);

    expect(newAnimalShelter.catStack[0].type).toEqual('cat');
    expect(newAnimalShelter.catStack[0].name).toEqual('karal');
  });

  it('Can successfully add a dog to the stack', () => {
    newAnimalShelter.enqueue(dogOne);
    
    expect(newAnimalShelter.dogStack[0].type).toEqual('dog');
    expect(newAnimalShelter.dogStack[0].name).toEqual('max');
  });

  it('Can successfully remove a dog from the stack', () => {
    newAnimalShelter.enqueue(dogOne);
    newAnimalShelter.enqueue(dogTwo);
    newAnimalShelter.dequeue({type: 'dog'});

    expect(newAnimalShelter.dogStack[0].type).toEqual('dog');
    expect(newAnimalShelter.dogStack[0].name).toEqual('sarmd');
  });

  it('Can successfully remove a cat from the stack', () => {
    newAnimalShelter.enqueue(catOne);
    newAnimalShelter.enqueue(catTwo);
    newAnimalShelter.dequeue({type: 'cat'});

    expect(newAnimalShelter.catStack[0].type).toEqual('cat');
    expect(newAnimalShelter.catStack[0].name).toEqual('sherazi');
  });

  it('Will not dequeue anything if the pref is not dog or cat', () => {
    newAnimalShelter.enqueue(catOne);
    newAnimalShelter.enqueue(catTwo);
    newAnimalShelter.dequeue({type: 'penguin'});

    expect(newAnimalShelter.catStack[0].type).toEqual('cat');
    expect(newAnimalShelter.catStack[0].name).toEqual('sherazi');
  });

});