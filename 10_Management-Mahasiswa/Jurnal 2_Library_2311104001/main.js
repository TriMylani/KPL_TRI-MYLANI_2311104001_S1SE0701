import { FPB, KPK, Turunan, Integral } from './matematikaLibraries/index.js';

console.log("FPB dari 60 dan 45:", FPB(60, 45)); // 15
console.log("KPK dari 12 dan 8:", KPK(12, 8));   // 24

const fungsi = [1, 4, -12, 9];
console.log("Turunan dari x^3 + 4x^2 -12x + 9:", Turunan(fungsi)); // 3x^2 + 8x -12

const fungsiIntegral = [4, 6, -12, 9];
console.log("Integral dari 4x^3 + 6x^2 -12x + 9:", Integral(fungsiIntegral)); // x^4 + 2x^3 -6x^2 + 9x + C
