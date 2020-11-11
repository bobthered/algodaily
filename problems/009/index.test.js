/* eslint-disable quotes */
/* eslint-disable no-undef */
const Hashmap = require('.');

const m = new Hashmap();
m.set('name', 'Jake');

test("m.get('name') should be 'Jake'", () => {
  expect(m.get('name')).toBe('Jake');
});
