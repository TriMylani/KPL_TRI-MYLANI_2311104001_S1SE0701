class Penjumlahan {
  static jumlahTigaAngka(a, b, c) {
    return a + b + c;
  }
}

// Menentukan tipe data berdasarkan NIM 2311104001 (berakhiran 1 → float)
const angka1 = 23.0; // 2 digit pertama
const angka2 = 11.0; // 2 digit berikutnya
const angka3 = 10.0; // 2 digit terakhir

console.log(
  `Hasil Penjumlahan: ${Penjumlahan.jumlahTigaAngka(angka1, angka2, angka3)}`
);

class SimpleDataBase {
  constructor() {
    this.storedData = [];
    this.inputDates = [];
  }

  addNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date().toISOString());
  }

  printAllData() {
    this.storedData.forEach((data, index) => {
      console.log(
        `Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${
          this.inputDates[index]
        }`
      );
    });
  }
}

// Contoh penggunaan
const db = new SimpleDataBase();
db.addNewData(23);
db.addNewData(11);
db.addNewData(40);
db.printAllData();

module.exports = SimpleDataBase;
