const { CariNilaiPangkat } = require('./utils/pangkat');

function hitungPangkat() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
}
