const Movie = require("./models/movie");

let movies = [
  new Movie(
    "Doraemon: Nobita's New Dinosaur",
    "Kazuaki Imai",
    ["Nobita", "Doraemon"],
    "Nobita finds twin dinosaurs and takes them to the Dinosaur Era with Doraemon's help."
  ),
  new Movie(
    "Shaun the Sheep Movie",
    "Mark Burton",
    ["Shaun", "Bitzer"],
    "Shaun takes a trip to the big city to rescue his farmer and gets into lots of trouble."
  ),
  new Movie(
    "Masha and the Bear: Holiday on Ice",
    "Oleg Kuzovkov",
    ["Masha", "The Bear"],
    "Masha brings chaos to a winter ice show while learning about friendship and fun."
  ),
];

module.exports = movies;
