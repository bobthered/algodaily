/* eslint-disable no-undef */
const majorityElement = require('.');

test('[4, 2, 4] is 4', () => {
  expect(majorityElement([4, 2, 4])).toEqual(4);
});
test('[4, 2, 4, 2] is null', () => {
  expect(majorityElement([4, 2, 4, 2])).toEqual(null);
});
test('[4, 2, 4, 2, 1, 4, 1, 2, 4] is null', () => {
  expect(majorityElement([4, 2, 4, 2, 1, 4, 1, 2, 4])).toEqual(null);
});
