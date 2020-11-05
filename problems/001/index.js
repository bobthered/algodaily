const intersection = (arr1, arr2) =>
  arr2
    .filter(a => arr1.indexOf(a) !== -1)
    .filter((a, i, arr) => arr.indexOf(a) === i);

module.exports = intersection;
