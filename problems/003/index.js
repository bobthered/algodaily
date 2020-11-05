const reverseOnlyAlphabetical = s => {
  const arr = s.split('');
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    while (l < r && /[a-zA-Z]/.test(arr[l]) === false) l++;
    while (l < r && /[a-zA-Z]/.test(arr[r]) === false) r--;
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr.join('');
};

module.exports = reverseOnlyAlphabetical;
