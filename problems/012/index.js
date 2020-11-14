const detectSubstring = (str, subStr) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length - subStr.length; i++) {
    if ([...arr].splice(i, subStr.length).join('') === subStr) return i;
  }
  return -1;
};

module.exports = detectSubstring;
