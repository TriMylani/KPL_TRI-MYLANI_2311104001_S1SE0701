// Class DataCenter menerapkan pola Singleton untuk menyimpan dan mengelola data aplikasi.
class DataCenter {
    constructor() {
        // Jika belum ada instance, buat instance dan simpan data dalam array.
        if (!DataCenter.instance) {
            this._storedData = [];
            DataCenter.instance = this;
        }
        // Kembalikan instance tunggal yang sudah ada.
        return DataCenter.instance;
    }
    // Mengembalikan semua data yang tersimpan.
    getAllData() {
        return this._storedData;
    }
    // Menambahkan data baru ke array.
    addData(input) {
        this._storedData.push(input);
    }
    // Menghapus data berdasarkan indeks jika valid.
    deleteDataByIndex(index) {
        if (index >= 0 && index < this._storedData.length) {
            this._storedData.splice(index, 1);
        } else {
            console.log('Invalid index!');
        }
    }
    // Menampilkan semua data ke konsol.
    printAllData() {
        this._storedData.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
// Membekukan instance agar tidak bisa diubah, lalu diekspor.
const singletonInstance = new DataCenter();
Object.freeze(singletonInstance);

module.exports = singletonInstance;
