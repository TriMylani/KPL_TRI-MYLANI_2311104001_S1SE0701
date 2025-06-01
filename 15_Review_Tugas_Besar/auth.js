import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { readCourses } from "./user.js";

// Setup path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const userFile = path.join(__dirname, "users.json");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function validateInput(username, password) {
  const asciiOnly = /^[a-zA-Z0-9]*$/;
  const specialChar = /[!@#$%^&*]/;

  if (!asciiOnly.test(username)) {
    return {
      success: false,
      message: "Username hanya boleh huruf/angka ASCII.",
    };
  }
  if (password.length < 8 || password.length > 20) {
    return { success: false, message: "Password harus 8-20 karakter." };
  }
  if (!specialChar.test(password)) {
    return {
      success: false,
      message: "Password harus punya 1 karakter unik (!@#$%^&*).",
    };
  }
  if (password.toLowerCase().includes(username.toLowerCase())) {
    return {
      success: false,
      message: "Password tidak boleh mengandung username.",
    };
  }
  return { success: true };
}

export async function register(ask) {
  const username = await ask("Masukkan username: ");
  const password = await ask("Masukkan password: ");

  const valid = validateInput(username, password);
  if (!valid.success) {
    console.log("❌", valid.message);
    return;
  }

  let users = [];
  try {
    const data = await readFile(userFile, "utf8");
    users = JSON.parse(data);
  } catch {}

  if (users.find((u) => u.username === username)) {
    console.log("❌ Username sudah terdaftar.");
    return;
  }

  users.push({ username, password: hashPassword(password) });
  await writeFile(userFile, JSON.stringify(users, null, 2));
  console.log("✅ Registrasi berhasil!\n");

  // 👇 Tambahan: langsung tampilkan daftar mata kuliah
  await readCourses();
}

export async function login(ask) {
  const username = await ask("Masukkan username: ");
  const password = await ask("Masukkan password: ");

  try {
    const data = await readFile(userFile, "utf8");
    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username);

    if (!user || user.password !== hashPassword(password)) {
      console.log("❌ Username atau password salah.");
    } else {
      console.log("✅ Login berhasil.");
      await readCourses();
    }
  } catch {
    console.log("❌ Data user tidak ditemukan.");
  }
}
