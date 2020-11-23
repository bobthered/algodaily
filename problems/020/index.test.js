const uniques = require('.');

test('uniques of [3, 5, 6, 9, 9, 4, 3, 12] should be [3, 5, 6, 9, 4, 12]', () => {
  expect(uniques([3, 5, 6, 9, 9, 4, 3, 12])).toEqual([3, 5, 6, 9, 4, 12]);
});
