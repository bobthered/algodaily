const treatsDistribution = require('.');

test('[2, 2, 3, 3, 4, 4] snacks should return 3 unique snacks', () => {
  expect(treatsDistribution([2, 2, 3, 3, 4, 4])).toEqual(3);
});
