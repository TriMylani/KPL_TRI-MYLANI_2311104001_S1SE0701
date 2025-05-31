// Import modul readline untuk membaca input dari terminal
const readline = require('readline');

// Membuat interface untuk membaca input dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta input satu huruf dari pengguna
rl.question('Masukkan satu huruf: ', (inputChar) => {
  // Daftar huruf vokal kapital
  const vowels = ['A', 'I', 'U', 'E', 'O'];

  // Mengubah huruf input menjadi kapital
  inputChar = inputChar.toUpperCase();

  // Mengecek apakah huruf termasuk vokal atau konsonan
  if (vowels.includes(inputChar)) {
    console.log(`Huruf ${inputChar} merupakan huruf vokal`);
  } else {
    console.log(`Huruf ${inputChar} merupakan huruf konsonan`);
  }

  // Menampilkan daftar angka genap
  const evenNumbers = [2, 4, 6, 8, 10];
  evenNumbers.forEach((number, index) => {
    console.log(`Angka genap ${index + 1}: ${number}`);
  });

  // Menutup interface readline
  rl.close();
});
