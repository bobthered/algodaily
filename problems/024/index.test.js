const productExceptSelf = require('.');

test('Given [1, 2, 4, 16] the product of all the sums except itself would be [128, 64, 32, 8]', () => {
  expect(productExceptSelf([1, 2, 4, 16])).toEqual([128, 64, 32, 8]);
});
