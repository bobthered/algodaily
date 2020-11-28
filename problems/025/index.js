const twoSum = (arr, goal) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(goal - arr[i]) !== -1 && arr.indexOf(goal - arr[i]) !== i)
      return [i, arr.indexOf(goal - arr[i])];
  }
};

module.exports = twoSum;
