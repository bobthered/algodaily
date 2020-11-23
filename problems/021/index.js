const subArraySum = (arr, sum) =>
  new Array(arr.length)
    .fill(0)
    .filter(
      (_, i) =>
        [...arr]
          .splice(i, arr.length)
          .filter(
            (_, j, z) =>
              [...z].splice(0, j + 1).reduce((a, c) => a + c) === sum,
          ).length !== 0,
    ).length !== 0;

module.exports = subArraySum;
