const crypto = require('crypto');

/**
 * Menghash password menggunakan SHA256
 * @param {string} password
 * @returns {string}
 */
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

/**
 * Membuat objek user baru
 * @param {string} username
 * @param {string} password
 * @returns {object}
 */
function createUser(username, password) {
  return {
    username,
    password: hashPassword(password)
  };
}

/**
 * Validasi username: hanya huruf A-Z, panjang 4–20
 */
function isValidUsername(username) {
  return /^[a-zA-Z]{4,20}$/.test(username);
}

/**
 * Validasi password: 8–20 karakter, ada simbol, tidak mengandung username
 */
function isValidPassword(password, username) {
  const panjangOke = password.length >= 8 && password.length <= 20;
  const adaSimbol = /[!@#$%^&*]/.test(password);
  const tidakAdaUsername = !password.includes(username);
  return panjangOke && adaSimbol && tidakAdaUsername;
}

module.exports = {
  hashPassword,
  createUser,
  isValidUsername,
  isValidPassword
};
