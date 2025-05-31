const { CariNilaiPangkat } = require('./utils');

function handleClick() {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  const result = CariNilaiPangkat(a, b);
  document.getElementById('output').innerText = `Hasil: ${result}`;
}
