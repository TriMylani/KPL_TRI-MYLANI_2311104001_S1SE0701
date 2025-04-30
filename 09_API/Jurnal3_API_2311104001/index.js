const express = require("express");
const app = express();
const mahasiswaRoutes = require("./routes/mahasiswa");

app.use(express.json());
app.use("/api/mahasiswa", mahasiswaRoutes);

const PORT = 1230;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/mahasiswa`);
});
