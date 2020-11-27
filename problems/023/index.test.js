const leastMissingPositive = require('.');

test('given [1, 2, 3, 0] the least missing positive is 4 since we already have 0 through 3', () => {
  expect(leastMissingPositive([1, 2, 3, 0])).toEqual(4);
});
test('given [-2, -1, 0, 1, 3] the least missing positive is 4 since we already have 0 through 3', () => {
  expect(leastMissingPositive([-2, -1, 0, 1, 3])).toEqual(2);
});

module.exports = leastMissingPositive;
