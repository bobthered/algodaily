/* eslint-disable indent */
const powerOfN = (n, p, q = 0) =>
  Math.pow(n, q) === p
    ? true
    : Math.pow(n, q) > p
    ? false
    : powerOfN(n, p, q + 1);

const powerOfThree = n => powerOfN(3, n);

module.exports = powerOfThree;
