class Penjumlahan {
  static jumlahTigaAngka(a, b, c) {
    return a + b + c;
  }
}

// Input dari NIM: 23, 11, 10 (berakhiran 1 → float)
const angka1 = 23.0;
const angka2 = 11.0;
const angka3 = 10.0;

console.log(
  `Hasil Penjumlahan: ${Penjumlahan.jumlahTigaAngka(angka1, angka2, angka3)}`
);
