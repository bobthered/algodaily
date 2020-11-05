/* eslint-disable quotes */
/* eslint-disable no-undef */
const reverseOnlyAlphabetical = require('.');

test("reverseOnlyAlphabetical('sea!$hells3') is 'sll!$ehaes3'", () => {
  expect(reverseOnlyAlphabetical('sea!$hells3')).toEqual('sll!$ehaes3');
});
