// utils.js

/**
 * Mengembalikan sapaan untuk user
 * @param {string} name - Nama user
 * @returns {string}
 */
function greetUser(name) {
  return `Halo, ${name}! Selamat datang di praktikum Modul 14.`;
}

/**
 * Menghitung total harga dari list item
 * @param {Array} items - Array objek { name, price }
 * @returns {number}
 */
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

module.exports = { greetUser, calculateTotal };
