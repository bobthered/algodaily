const leastMissingPositive = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    if (arr.indexOf(i + 1) === -1) return i + 1;
  }
  return max + 1;
};

module.exports = leastMissingPositive;
