const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama Anda: ', (nama) => {
    console.log(`Selamat datang, ${nama}!`);
    
    let arr = Array.from({ length: 50 }, (_, i) => i);
    
    arr.forEach(num => {
        let output = `${num}`;
        if (num % 2 === 0 && num % 3 === 0) {
            output += ' #$#$';
        } else if (num % 2 === 0) {
            output += ' ##';
        } else if (num % 3 === 0) {
            output += ' $$';
        }
        console.log(output);
    });
    
    rl.question('Masukkan angka (1-10000): ', (nilaiString) => {
        let nilaiInt = parseInt(nilaiString);
        
        if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
            console.log('Input tidak valid!');
        } else {
            if (isPrime(nilaiInt)) {
                console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
            }
        }
        rl.close();
    });
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}