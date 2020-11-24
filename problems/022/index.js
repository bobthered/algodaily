const treatsDistribution = arr => {
  const occurences = {};
  arr.forEach(a => {
    if (!(a in occurences)) occurences[a] = 0;
    occurences[a]++;
  });
  const multipleOccurences = [];
  const singleOccurences = [];
  Object.keys(occurences).forEach(a => {
    if (occurences[a] === 1) singleOccurences.push(a);
    if (occurences[a] > 1) multipleOccurences.push(a);
  });
  return multipleOccurences.length + Math.floor(singleOccurences.length / 2);
};

module.exports = treatsDistribution;
