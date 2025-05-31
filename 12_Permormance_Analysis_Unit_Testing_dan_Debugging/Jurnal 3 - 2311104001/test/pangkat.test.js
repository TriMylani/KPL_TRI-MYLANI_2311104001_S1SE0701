const { CariNilaiPangkat } = require('../utils/pangkat');

test('b = 0 harus return 1', () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test('b negatif return -1', () => {
  expect(CariNilaiPangkat(5, -2)).toBe(-1);
});

test('a > 100 atau b > 10 return -2', () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
  expect(CariNilaiPangkat(5, 11)).toBe(-2);
});

test('hasil pangkat besar return -3', () => {
  expect(CariNilaiPangkat(9, 30)).toBe(-3);
});

test('normal case 2^3 = 8', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

