const lonelyNumber = arr => {
  return arr.filter(
    (a, _, arr) => [...arr].filter(b => a === b).length === 1,
  )[0];
};

module.exports = lonelyNumber;
