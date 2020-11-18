const missingInUnsorted = (arr, lowerBound, upperBound) => {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
  return -1;
};

module.exports = missingInUnsorted;
