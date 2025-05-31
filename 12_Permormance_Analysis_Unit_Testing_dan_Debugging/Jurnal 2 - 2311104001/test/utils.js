const { CariNilaiPangkat } = require('../utils');

test('b = 0 returns 1', () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test('b < 0 returns -1', () => {
  expect(CariNilaiPangkat(2, -3)).toBe(-1);
});

test('a > 100 or b > 10 returns -2', () => {
  expect(CariNilaiPangkat(101, 5)).toBe(-2);
  expect(CariNilaiPangkat(5, 11)).toBe(-2);
});

test('overflow returns -3', () => {
  expect(CariNilaiPangkat(9, 30)).toBe(-3);
});

test('normal case returns correct power', () => {
  expect(CariNilaiPangkat(2, 5)).toBe(32);
});
