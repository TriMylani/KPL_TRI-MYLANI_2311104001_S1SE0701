// index.js

const dataCenter1 = require('./dataCenter');
const dataCenter2 = require('./dataCenter');

// Add some data
dataCenter1.addData('Asprak: Bagas');
dataCenter1.addData('Anggota: Ahmad');
dataCenter1.addData('Anggota: Andreas');
dataCenter1.addData('Anggota: Rizal');

// Print all data via instance 2
console.log('Data via dataCenter2:');
dataCenter2.printAllData();

// Delete the last data (Rizal)
dataCenter2.deleteDataByIndex(3);

// Print again using dataCenter1
console.log('\nData after deletion via dataCenter1:');
dataCenter1.printAllData();

// Check data count
console.log(`\nJumlah data (dataCenter1): ${dataCenter1.getAllData().length}`);
console.log(`Jumlah data (dataCenter2): ${dataCenter2.getAllData().length}`);
