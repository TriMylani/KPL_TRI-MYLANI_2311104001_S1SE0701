// import process from "process";
// import readline from "readline";

// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// input.question("siapa nama kamu?" , (nama) => {
//     console.info(`Hallo ${nama}`)

//     input.close();
// })

import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama kamu? ", (nama) => {
input.question("Apa jurusan kamu? ", (jurusan) => {
input.question("Di universitas mana kamu kuliah? ", (universitas) => {
input.question("Berapa umur kamu? ", (umur) => {
    console.info(`Halo, namaku ${nama}`);
    console.info(`Jurusanku ${jurusan}`);
    console.info(`Universitasku ${universitas}`);
    console.info(`Umurku ${umur} tahun`);
                
    input.close();
});
});
});
});
