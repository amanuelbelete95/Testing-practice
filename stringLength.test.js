const stringLength = require('./stringLength')
// const reverseString = require('./stringLength')

test('return checks of length', () => {
  expect(stringLength('amaaaa')).toEqual(true);
});

// test('return reverse string', () => {
//   expect(reverseString('aman')).toBe('nama');
// })
