const readline = require('readline-sync');
const { register, login } = require('./auth');

console.log('=== Aplikasi Login Praktikum Modul 15 ===');
console.log('1. Registrasi');
console.log('2. Login');
const choice = readline.question('Pilih menu (1/2): ');

(async () => {
  try {
    const username = readline.question('Username: ');
    const password = readline.question('Password: ', { hideEchoBack: true });

    if (choice === '1') {
      const result = await register(username, password);
      console.log(result);
    } else if (choice === '2') {
      const result = await login(username, password);
      console.log(result);
    } else {
      console.log('Menu tidak valid.');
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
