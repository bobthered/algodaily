/* eslint-disable indent */
const reduceToOneDigit = n =>
  n < 10
    ? n
    : reduceToOneDigit(
        n
          .toString()
          .split('')
          .map(a => +a)
          .reduce((a, c) => a + c),
      );

module.exports = reduceToOneDigit;
