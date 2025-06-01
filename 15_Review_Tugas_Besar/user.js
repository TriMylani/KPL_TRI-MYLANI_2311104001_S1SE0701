import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Menentukan path ke file JSON mata kuliah
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const courseFilePath = path.join(__dirname, "tp7_2_2311104001.json");

/**
 * Membaca dan menampilkan daftar mata kuliah dari file JSON.
 */
export async function readCourses() {
  try {
    const fileContent = await readFile(courseFilePath, "utf8");
    const courseData = JSON.parse(fileContent);

    console.log("\nDaftar Mata Kuliah yang Diambil:");
    courseData.courses.forEach((course, index) => {
      console.log(`MK ${index + 1}: ${course.code} - ${course.name}`);
    });
  } catch (error) {
    console.error("❌ Gagal membaca file mata kuliah:", error.message);
  }
}
