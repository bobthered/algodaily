const maxOfMinPairs = arr => {
  arr = arr.sort((a, b) => (a < b ? -1 : 1));
  return (
    Math.min(...[...arr.splice(0, arr.length / 2)]) +
    Math.min(...[...arr.splice(arr.length / 2 - 1, arr.length / 2)])
  );
};

module.exports = maxOfMinPairs;
