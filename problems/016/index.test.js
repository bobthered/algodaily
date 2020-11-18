const missingInUnsorted = require('.');

const arr = [2, 5, 1, 4, 9, 6, 3, 7];
const lowerBound = 1;
const upperBound = 9;

const missing = missingInUnsorted(arr, lowerBound, upperBound);

test('missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9) should be 8', () => {
  expect(missing).toEqual(8);
});
