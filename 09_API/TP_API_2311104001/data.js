const Mahasiswa = require("./models/mahasiswa");

let listMahasiswa = [
  new Mahasiswa("Tri Mylani", "2311104001"),           // Ganti dengan nama dan NIM kamu
  new Mahasiswa("Viona Aziz Syahputri", "2311104010"),
  new Mahasiswa("Shilfi Habibah", "2311104002")
];

module.exports = listMahasiswa;
