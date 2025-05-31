const { expect } = require("chai");
const { CariTandaBilangan } = require("../renderer");

describe("CariTandaBilangan", function () {
  it('harus mengembalikan "Negatif" jika input < 0', function () {
    expect(CariTandaBilangan(-10)).to.equal("Negatif");
  });

  it('harus mengembalikan "Positif" jika input > 0', function () {
    expect(CariTandaBilangan(5)).to.equal("Positif");
  });

  it('harus mengembalikan "Nol" jika input == 0', function () {
    expect(CariTandaBilangan(0)).to.equal("Nol");
  });
});
