const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan satu huruf: ', (char) => {
    const vokal = ['A', 'I', 'U', 'E', 'O'];
    char = char.toUpperCase(); 
    
    if (vokal.includes(char)) {
        console.log(`Huruf ${char} merupakan huruf vokal`);
    } else {
        console.log(`Huruf ${char} merupakan huruf konsonan`);
    }

    const angkaGenap = [2, 4, 6, 8, 10];
    
    angkaGenap.forEach((num, index) => {
        console.log(`Angka genap ${index + 1} : ${num}`);
    });
    
    rl.close();
});
