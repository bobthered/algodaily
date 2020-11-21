const fastMinimumInArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) !== -1) return i;
  }
};

module.exports = fastMinimumInArray;
