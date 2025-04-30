const express = require("express");
const app = express();
const movieRoutes = require("./routes/movies");

app.use(express.json());
app.use("/api/Movies", movieRoutes);

const PORT = 1500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/Movies`);
});
