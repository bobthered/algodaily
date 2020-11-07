const isPalindrome = s =>
  s.replace(/[^a-zA-Z]/g, '') ===
  s
    .replace(/[^a-zA-Z]/g)
    .split('')
    .reverse()
    .join('');

module.exports = isPalindrome;
