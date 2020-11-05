/* eslint-disable quotes */
/* eslint-disable no-undef */
const fizzBuzz = require('.');

test("fizzBuzz(15) is '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'", () => {
  expect(fizzBuzz(15)).toEqual('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz');
});
