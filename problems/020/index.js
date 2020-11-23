const uniques = arr => {
  // unique array
  const uniqueArr = [];

  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if this index equals the first index of the arr
    if (i === arr.indexOf(arr[i])) uniqueArr.push(arr[i]);
  }

  return uniqueArr;
};

module.exports = uniques;
