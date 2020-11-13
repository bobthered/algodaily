/* eslint-disable no-undef */
const reduceToOneDigit = require('.');

test('Reducing 49 to one digit should be 4', () => {
  expect(reduceToOneDigit(49)).toEqual(4);
});
