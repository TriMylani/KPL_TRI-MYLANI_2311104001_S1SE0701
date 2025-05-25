function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

function handleClick() {
  const value = parseInt(document.getElementById("inputNumber").value);
  const result = CariTandaBilangan(value);
  document.getElementById("outputLabel").innerText = result;
}

module.exports = { CariTandaBilangan };
