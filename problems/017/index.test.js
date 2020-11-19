const missingNumbers = require('.');

test('missingNumbers([1, 2, 4, 5, 7]) should be [3, 6]', () => {
  expect(missingNumbers([1, 2, 4, 5, 7])).toEqual([3, 6]);
});
