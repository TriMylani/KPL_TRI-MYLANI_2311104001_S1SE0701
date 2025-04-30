const express = require("express");
const router = express.Router();

const Mahasiswa = require("../models/mahasiswa");

// Simulasi data mahasiswa
let mahasiswaList = [
  new Mahasiswa("Budi", "120220001", ["Math", "AI"], 2022),
  new Mahasiswa("Sari", "120220002", ["SE", "WebProg"], 2023),
  new Mahasiswa("Dewi", "120220003", ["DBMS", "Cloud"], 2021),
];

// GET all mahasiswa
router.get("/", (req, res) => {
  res.json(mahasiswaList);
});

// GET mahasiswa by index
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`GET /api/mahasiswa/${id}`);
  console.log(`Total mahasiswa: ${mahasiswaList.length}`);

  if (isNaN(id) || id < 0 || id >= mahasiswaList.length) {
    console.log("Invalid index accessed");
    return res.status(404).json({ error: "Not Found" });
  }

  console.log("Returning mahasiswa:", mahasiswaList[id]);
  res.json(mahasiswaList[id]);
});

// POST: Add one or multiple mahasiswa
router.post("/", (req, res) => {
  const data = req.body;
  const added = [];

  if (Array.isArray(data)) {
    data.forEach(({ name, nim, course, year }) => {
      const mhs = new Mahasiswa(name, nim, course, year);
      mahasiswaList.push(mhs);
      added.push(mhs);
    });
    res.status(201).json(added);
  } else {
    const { name, nim, course, year } = data;
    const mhs = new Mahasiswa(name, nim, course, year);
    mahasiswaList.push(mhs);
    res.status(201).json(mhs);
  }
});

// DELETE mahasiswa by index
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= mahasiswaList.length) {
    return res.status(404).json({ error: "Not Found" });
  }
  mahasiswaList.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;
