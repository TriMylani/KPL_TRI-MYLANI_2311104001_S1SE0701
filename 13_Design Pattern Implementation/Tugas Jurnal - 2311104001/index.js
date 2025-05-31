const data1 = require('./pusatDataSingleton');
const data2 = require('./pusatDataSingleton');

data1.addSebuahData("Asprak : Fazza");
data1.addSebuahData("Praktikan: Tri");
data1.addSebuahData("Praktikan: Myla");
data1.addSebuahData("Praktikan: Lani");

console.log("Data menggunakan data2:");
data2.printSemuaData();

data2.hapusSebuahData(3);

console.log("\nSetelah penghapusan praktikan 3 (index ke-3):");
data1.printSemuaData();

console.log("\nJumlah data (data1):", data1.getSemuaData().length);
console.log("Jumlah data (data2):", data2.getSemuaData().length);
