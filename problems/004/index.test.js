/* eslint-disable no-undef */
const isAnAnagram = require('.');

test('"cinema" and "iceman" returns true', () => {
  expect(isAnAnagram('cinema', 'iceman')).toEqual(true);
});