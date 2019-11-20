/**
 * Testing operations and validation functions
 * with Mocha and Node.js Assert module.
 *
 */

const moveBox = require('./move.js');
const assert = require('assert');

/*
Initial Position, Starting Array
*/
const arr = [
  [1,1,1],
  [1,1,1],
  [1,1,0]
];

// Fake dom.
const fakeDom = {
  'data-key': '21',
  target: {
    getAttribute: (key) => fakeDom[key],
    setAttribute: (key) => fakeDom[key],
    style: {}
  }
}

it('Before Move arr[2][1] value is 1 by default', () => {
  assert.equal(arr[2][1], 1);
});

it('Before Move arr[2][2] value is 0 by default', () => {
  assert.equal(arr[2][2], 0);
});

it('After Move arr[2][1] value suppose to be 0', () => {
  assert.equal(moveBox(fakeDom)[2][1], 0);
});

it('After Move arr[2][2] value suppose to be 1', () => {
  assert.equal(moveBox(fakeDom)[2][2], 1);
});
