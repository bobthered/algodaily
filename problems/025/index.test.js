const twoSum = require('.');

test('Given array [0, 3, 6, 7, 9] and goal of 10, the two indexes to sum up to the goal are [1, 3]', () => {
  expect(twoSum([0, 3, 6, 7, 9], 10)).toEqual([1, 3]);
});
