/* eslint-disable indent */
const fizzBuzz = n =>
  [...Array(n)]
    .fill(0)
    .map((a, i) =>
      (i + 1) % 3 === 0 && (i + 1) % 5 === 0
        ? 'fizzbuzz'
        : (i + 1) % 3 === 0
        ? 'fizz'
        : (i + 1) % 5 === 0
        ? 'buzz'
        : i + 1,
    )
    .join('');

module.exports = fizzBuzz;
