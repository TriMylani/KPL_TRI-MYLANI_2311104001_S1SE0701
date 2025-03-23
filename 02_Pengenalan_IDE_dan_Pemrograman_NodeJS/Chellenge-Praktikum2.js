const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukkan jumlah barang: ', (jumlah) => {
    const totalBarang = parseInt(jumlah);
    let daftarHarga = [];
    const tanyaHarga = (i = 0) => {
        if (i < totalBarang) {
            rl.question(`Masukkan harga barang ke-${i + 1}: `, (harga) => {
                const hargaBarang = parseFloat(harga);
                daftarHarga.push(hargaBarang);
                tanyaHarga(i + 1);
            });
        } else {
            tampilkanStruk();
        }
    };

    const tampilkanStruk = () => {
        const totalHarga = daftarHarga.reduce((a, b) => a + b, 0);
        
        let kategoriDiskon;
        if (totalHarga > 100000) {
            kategoriDiskon = "Diskon Besar";
        } else if (totalHarga >= 50000) {
            kategoriDiskon = "Diskon Sedang";
        } else {
            kategoriDiskon = "Tidak Ada Diskon";
        }

        console.log("\n--- Output yang diharapkan ---");
        console.log(`Total harga   : Rp${totalHarga.toLocaleString('id-ID')}`);
        console.log(`Jumlah barang : ${totalBarang}`);
        console.log(`Kategori Diskon: ${kategoriDiskon}\n`);
        
        daftarHarga.forEach((harga, i) => {
            console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
        });
        rl.close();
    };

    tanyaHarga();
});