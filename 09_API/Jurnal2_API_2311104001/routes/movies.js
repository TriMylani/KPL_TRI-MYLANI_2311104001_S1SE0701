const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");
let movies = require("../data");

// GET all movies
router.get("/", (req, res) => {
  res.json(movies);
});

// GET movie by index
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`GET /api/Movies/${id}`);
    console.log(`Total movies: ${movies.length}`);
  
    if (isNaN(id) || id < 0 || id >= movies.length) {
      console.log("Invalid index accessed");
      return res.status(404).json({ error: "Not Found" });
    }
  
    console.log("Returning movie:", movies[id]);
    res.json(movies[id]);
  });
  
  

// POST: Add one or multiple movies
router.post("/", (req, res) => {
  const data = req.body;
  const added = [];

  if (Array.isArray(data)) {
    data.forEach(({ title, director, stars, description }) => {
      const movie = new Movie(title, director, stars, description);
      movies.push(movie);
      added.push(movie);
    });
    res.status(201).json(added);
  } else {
    const { title, director, stars, description } = data;
    const movie = new Movie(title, director, stars, description);
    movies.push(movie);
    res.status(201).json(movie);
  }
});

// DELETE movie by index
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= movies.length) return res.status(404).json({ error: "Not Found" });
  movies.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;
