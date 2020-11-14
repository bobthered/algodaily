/* eslint-disable quotes */
/* eslint-disable no-undef */
const detectSubstring = require('.');

test("index of 'cat' in 'home is where your cat is' should be 19", () => {
  expect(detectSubstring('home is where your cat is', 'cat')).toEqual(19);
});
test("index of 'home' in 'home is where your cat is' should be 0", () => {
  expect(detectSubstring('home is where your cat is', 'home')).toEqual(0);
});
