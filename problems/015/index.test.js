/* eslint-disable quotes */
/* eslint-disable no-undef */
const maxOfMinPairs = require('.');

test("Here's an example input: [3, 4, 2, 5]. The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5)", () => {
  expect(maxOfMinPairs([3, 4, 2, 5])).toEqual(6);
});
