const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/mahasiswa");
let listMahasiswa = require("../data");

// GET all
router.get("/", (req, res) => {
  res.json(listMahasiswa);
});

// GET by index
router.get("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= listMahasiswa.length) return res.sendStatus(404);
  res.json(listMahasiswa[index]);
});

// POST
router.post("/", (req, res) => {
  const { nama, nim } = req.body;
  const m = new Mahasiswa(nama, nim);
  listMahasiswa.push(m);
  res.status(201).json(m);
});

// DELETE
router.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= listMahasiswa.length) return res.sendStatus(404);
  listMahasiswa.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
