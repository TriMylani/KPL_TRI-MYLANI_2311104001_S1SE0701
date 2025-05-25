const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { CariNilaiPangkat } = require('./utils/pangkat');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/hitung', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const hasil = CariNilaiPangkat(a, b);
    res.send({ hasil });
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
