const subArraySum = require('.');

test('[1, 2, 3] contains a subarray sum of 5', () => {
  expect(subArraySum([1, 2, 3], 5)).toEqual(true);
});
