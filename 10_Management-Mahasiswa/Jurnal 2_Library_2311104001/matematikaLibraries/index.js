export function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

export function Turunan(coeffs) {
  const result = [];
  const degree = coeffs.length - 1;

  for (let i = 0; i < degree; i++) {
    const coef = coeffs[i];
    const exp = degree - i;
    const newCoef = coef * exp;
    const newExp = exp - 1;

    if (newCoef === 0) continue;

    if (newExp === 0) {
      result.push(`${newCoef}`);
    } else if (newExp === 1) {
      result.push(`${newCoef}x`);
    } else {
      result.push(`${newCoef}x^${newExp}`);
    }
  }

  return result.join(" + ").replace(/\+ -/g, "- ");
}

export function Integral(coeffs) {
  const result = [];
  const degree = coeffs.length;

  for (let i = 0; i < degree; i++) {
    const coef = coeffs[i];
    const exp = degree - i;
    const newExp = exp + 1;
    const newCoef = coef / newExp;

    if (newExp === 1) {
      result.push(`${newCoef}x`);
    } else {
      result.push(`${newCoef}x^${newExp}`);
    }
  }

  result.push("C");
  return result.join(" + ").replace(/\+ -/g, "- ");
}
