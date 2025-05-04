export function AkarPersamaanKuadrat([a, b, c]) {
    const D = b * b - 4 * a * c; // diskriminan
    if (D < 0) return []; // tidak ada akar real
    const akar1 = (-b + Math.sqrt(D)) / (2 * a);
    const akar2 = (-b - Math.sqrt(D)) / (2 * a);
    return [akar1, akar2];
  }
  
  export function HasilKuadrat([a, b]) {
    // (ax + b)^2 = a^2 x^2 + 2abx + b^2
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;
    return [a2, ab2, b2];
  }
  