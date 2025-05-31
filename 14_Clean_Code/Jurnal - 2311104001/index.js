// Import instance singleton dari pusatDataSingleton
const dataInstance1 = require('./pusatDataSingleton');
const dataInstance2 = require('./pusatDataSingleton');

// Menambahkan data ke instance pertama
dataInstance1.addSebuahData("Asprak: Fazza");
dataInstance1.addSebuahData("Praktikan: Tri");
dataInstance1.addSebuahData("Praktikan: Myla");
dataInstance1.addSebuahData("Praktikan: Lani");

// Menampilkan data melalui instance kedua
console.log("Data menggunakan dataInstance2:");
dataInstance2.printSemuaData();

// Menghapus data index ke-3 (praktikan keempat)
dataInstance2.hapusSebuahData(3);

// Menampilkan data setelah penghapusan
console.log("\nSetelah penghapusan praktikan 3 (index ke-3):");
dataInstance1.printSemuaData();

// Menampilkan jumlah data dari kedua instance (seharusnya sama karena singleton)
console.log("\nJumlah data (dataInstance1):", dataInstance1.getSemuaData().length);
console.log("Jumlah data (dataInstance2):", dataInstance2.getSemuaData().length);
