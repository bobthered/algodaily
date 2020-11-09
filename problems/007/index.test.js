/* eslint-disable no-undef */
const powerOfThree = require('.');

test('9 should be true', () => {
  expect(powerOfThree(9)).toBe(true);
});
test('7 should be false', () => {
  expect(powerOfThree(7)).toBe(false);
});
