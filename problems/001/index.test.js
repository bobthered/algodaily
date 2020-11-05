/* eslint-disable no-undef */
const intersection = require('.');

test('[1, 2, 2, 1], [2, 2] is [2]', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
});
test('[4, 9, 5], [9, 4, 9, 8, 4] is [2]', () => {
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});
