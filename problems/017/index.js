const missingNumbers = arr => {
  // sort array
  arr = arr.sort((a, b) => (a < b ? -1 : 1));

  // initiliaze missing array
  const missingArr = [];

  // loop through array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i] - 1) missingArr.push(arr[i] - 1);
  }

  return missingArr;
};

module.exports = missingNumbers;
