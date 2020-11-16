/* eslint-disable quotes */
/* eslint-disable no-undef */
const isDollarDeleteEqual = require('.');

test("['f$st', 'st', 'ff$st'] should equal ['st', 'st', 'st']", () => {
  expect(isDollarDeleteEqual(['f$st', 'st', 'ff$st'])).toEqual([
    'st',
    'st',
    'st',
  ]);
});
