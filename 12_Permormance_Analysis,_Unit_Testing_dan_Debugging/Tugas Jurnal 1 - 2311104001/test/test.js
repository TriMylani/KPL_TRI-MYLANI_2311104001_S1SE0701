const { expect } = require('chai');
const { CariNilaiPangkat } = require('../utils/pangkat');

describe('CariNilaiPangkat', () => {
    it('b = 0 → return 1', () => {
        expect(CariNilaiPangkat(5, 0)).to.equal(1);
    });

    it('b negatif → return -1', () => {
        expect(CariNilaiPangkat(5, -2)).to.equal(-1);
    });

    it('b > 10 → return -2', () => {
        expect(CariNilaiPangkat(5, 11)).to.equal(-2);
    });

    it('a > 100 → return -2', () => {
        expect(CariNilaiPangkat(101, 2)).to.equal(-2);
    });

    it('hasil melebihi batas → return -3', () => {
        expect(CariNilaiPangkat(9, 30)).to.equal(-3);
    });

    it('hasil normal → return nilai pangkat', () => {
        expect(CariNilaiPangkat(2, 5)).to.equal(32);
    });
});
