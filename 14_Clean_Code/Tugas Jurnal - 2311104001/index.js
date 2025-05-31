// index.js

const { greetUser, calculateTotal } = require('./utils');

// Menyapa user
const username = 'Tri Mylani';
console.log(greetUser(username));

// Menghitung total harga belanjaan
const items = [
  { name: 'Pensil', price: 3000 },
  { name: 'Buku', price: 12000 }
];

const total = calculateTotal(items);
console.log(`Total belanja: Rp${total}`);
