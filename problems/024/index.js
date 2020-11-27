const productExceptSelf = arr =>
  arr.map((_, i) =>
    [...arr].filter((_, j) => i !== j).reduce((a, c) => a * c, 1)
  );

module.exports = productExceptSelf;
