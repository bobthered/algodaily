/* eslint-disable quotes */
/* eslint-disable no-undef */
const isPalindrome = require('.');

test("isPalindrome('thisisnotapalindrome') is false", () => {
  expect(isPalindrome('thisisnotapalindrome')).toEqual(false);
});
test("isPalindrome('racecar') is true", () => {
  expect(isPalindrome('racecar')).toEqual(true);
});
