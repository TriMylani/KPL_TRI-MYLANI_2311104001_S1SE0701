const fs = require('fs-extra');
const {
  createUser,
  isValidUsername,
  isValidPassword,
  hashPassword
} = require('./user');

const USERS_FILE = './users.json';

async function loadUsers() {
  return (await fs.pathExists(USERS_FILE)) ? await fs.readJson(USERS_FILE) : [];
}

async function saveUsers(users) {
  await fs.writeJson(USERS_FILE, users, { spaces: 2 });
}

async function register(username, password) {
  if (!isValidUsername(username)) {
    throw new Error('Username harus 4-20 huruf alfabet (A-Z, a-z).');
  }

  if (!isValidPassword(password, username)) {
    throw new Error('Password tidak valid. Harus 8-20 karakter, ada simbol, dan tidak mengandung username.');
  }

  const users = await loadUsers();
  if (users.find(u => u.username === username)) {
    throw new Error('Username sudah terdaftar.');
  }

  users.push(createUser(username, password));
  await saveUsers(users);
  return 'Registrasi berhasil!';
}

async function login(username, password) {
  const users = await loadUsers();
  const hashed = hashPassword(password);
  const user = users.find(u => u.username === username && u.password === hashed);
  if (user) {
    return `Login sukses. Selamat datang, ${username}!`;
  } else {
    throw new Error('Login gagal. Username atau password salah.');
  }
}

module.exports = { register, login };
