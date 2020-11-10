/* eslint-disable no-undef */
const lonelyNumber = require('.');

test('[4, 4, 6, 1, 3, 1, 3] is 6', () => {
  expect(lonelyNumber([4, 4, 6, 1, 3, 1, 3])).toBe(6);
});
test('[3, 3, 9] is 9', () => {
  expect(lonelyNumber([3, 3, 9])).toBe(9);
});
