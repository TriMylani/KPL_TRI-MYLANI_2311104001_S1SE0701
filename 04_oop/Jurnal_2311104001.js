// Implementasi Table-Driven untuk mendapatkan kode buah
class KodeBuah {
  constructor() {
    this.kodeBuahMap = {
      Apel: "A00",
      Aprikot: "B00",
      Alpukat: "C00",
      Pisang: "D00",
      Paprika: "E00",
      Kurma: "K00",
      Durian: "L00",
      Anggur: "M00",
      Melon: "N00",
      Semangka: "O00",
    };
  }

  getKodeBuah(namaBuah) {
    return this.kodeBuahMap[namaBuah] || "Kode tidak ditemukan";
  }
}

// Implementasi State-Based Construction
class PosisiKarakterGame {
  constructor(NIM) {
    this.state = "Berdiri";
    this.NIM = NIM;
  }

  ubahState(stateBaru) {
    if (this.NIM % 3 === 0) {
      if (stateBaru === "TombolS") console.log("tombol arah bawah ditekan");
      if (stateBaru === "TombolW") console.log("tombol arah atas ditekan");
    } else if (this.NIM % 3 === 1) {
      if (stateBaru === "Berdiri") console.log("posisi standby");
      if (stateBaru === "Tengkurap") console.log("posisi istirahat");
    } else if (this.NIM % 3 === 2) {
      if (this.state === "Terbang" && stateBaru === "Jongkok")
        console.log("posisi landing");
      if (this.state === "Berdiri" && stateBaru === "Terbang")
        console.log("posisi take off");
    }
    this.state = stateBaru;
  }
}

// Simulasi penggunaan
const kodeBuah = new KodeBuah();
console.log(kodeBuah.getKodeBuah("Apel")); // Output: A00
console.log(kodeBuah.getKodeBuah("Durian")); // Output: L00

const karakter = new PosisiKarakterGame(2311104001);
karakter.ubahState("Berdiri"); // Output: posisi standby
karakter.ubahState("Tengkurap"); // Output: posisi istirahat
