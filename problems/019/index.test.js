const fastMinimumInArray = require('.');

test('minimum value of array [4, 5, 1, 2, 3] is 1', () => {
  expect(fastMinimumInArray([4, 5, 1, 2, 3])).toEqual(1);
});
