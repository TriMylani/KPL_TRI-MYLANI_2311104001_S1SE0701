export function FPB(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return Math.abs(a);
  }
  
  export function KPK(a, b) {
    return Math.abs((a * b) / FPB(a, b));
  }
  
  export function Turunan(persamaan) {
    const result = [];
    for (let i = 0; i < persamaan.length - 1; i++) {
      const pangkat = persamaan.length - i - 1;
      const koef = persamaan[i] * pangkat;
      if (koef !== 0) {
        result.push(`${koef}${pangkat > 1 ? 'x' + pangkat : 'x'}`);
      }
    }
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
  }
  
  export function Integral(persamaan) {
    const result = [];
    for (let i = 0; i < persamaan.length; i++) {
      const pangkat = persamaan.length - i;
      const koef = persamaan[i] / pangkat;
      result.push(`${koef === 1 ? '' : koef}${pangkat > 1 ? 'x' + pangkat : 'x'}`);
    }
    result.push('C');
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
  }
  