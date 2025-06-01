import readline from "readline";
import { register, login } from "./auth.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) => new Promise((res) => rl.question(q, res));

async function main() {
  console.clear();
  console.log("===========================================");
  console.log("|      Aplikasi Registrasi & Login        |");
  console.log("|     Modul 15 - KPL - 2311104001         |");
  console.log("===========================================\n");

  console.log(" Silakan pilih menu:\n");
  console.log("[1] Registrasi Pengguna");
  console.log("[2] Login Pengguna");
  console.log("[0] Keluar\n");

  const choice = await ask("Masukkan pilihan Anda: ");

  if (choice === "1") {
    await register(ask);
  } else if (choice === "2") {
    await login(ask);
  } else if (choice === "0") {
    console.log("\n👋 Terima kasih telah menggunakan aplikasi.");
  } else {
    console.log("❌ Pilihan tidak valid.");
  }
  rl.close();
}

main();
