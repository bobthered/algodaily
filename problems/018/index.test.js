const sumAllPrimes = require('.');

test('sum of all primes smaller than 15 should be 41', () => {
  expect(sumAllPrimes(15)).toEqual(41);
});
