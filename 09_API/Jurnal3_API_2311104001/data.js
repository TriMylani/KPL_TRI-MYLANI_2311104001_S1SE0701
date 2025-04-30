const Mahasiswa = require("../models/mahasiswa");

let mahasiswaList = [
  new Mahasiswa(
    "Budi Santoso",
    "120220001",
    ["Math", "AI"],
    2022
  ),
  new Mahasiswa(
    "Sari Putri",
    "120220002",
    ["SE", "Web Programming"],
    2023
  ),
  new Mahasiswa(
    "Dewi Lestari",
    "120220003",
    ["DBMS", "Cloud Computing"],
    2021
  )
];

module.exports = mahasiswaList;
