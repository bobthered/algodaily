const majorityElement = arr => {
  // Array length less than 1
  if (arr.length < 1) return undefined;

  // Array length is 1
  if (arr.length === 1) return arr[0];

  // initialize hash
  const hash = {};

  // loop through array
  arr.forEach(a => {
    if (!(a in hash))
      hash[a] = [...arr].filter(b => a === b).length / arr.length;
  });

  // get sorted majority values
  const sortedMajorityValues = Object.keys(hash)
    .filter(a => hash[a] > 0.5)
    .sort((a, b) => (hash[a] > hash[b] ? -1 : 1));

  // check if only one value exists
  if (sortedMajorityValues.length === 1) return +sortedMajorityValues[0];

  // check if no values exits
  if (sortedMajorityValues.length === 0) return null;

  // check if first value is larger than second value
  if (sortedMajorityValues[0] > sortedMajorityValues[1])
    return +sortedMajorityValues[0];

  // otherwise return null
  return null;
};

module.exports = majorityElement;
