const {sum, sum2} = require("./penjumlahan")
const {kurang,kurang2} = require("./pengurangan")
const {kali} = require("./perkalian")
const {bagi} = require("./pembagian")

// console.log(sum2(10, 300))
// console.log(kurang2(30, 20))

// 1 hasil tambah inputan user (done)
// 2 hasil kurang inputan user
// 3 hasil kali inputan user
// 4 hasil bagi inputan user
// 5 hasil total harga kali quantitas barang

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

// nomor 1
rl.question('angka pertama yang akan ditambahkan? ', (angka1) => {
    rl.question('angka kedua yang mau dikurangkan? ', (angka2)=> {
        const hasil = sum(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil penambahan ${angka1} dan ${angka2} adalah ${hasil}`);

        rl.close();
    })
});

// nomor 2
rl.question('angka pertama yang akan dikurangkan? ', (angkaPengurangan1) => {
    rl.question('angka kedua yang mau dikurangkan? ', (angkaPengurangan2)=> {
        const hasil = kurang(parseInt(angkaPengurangan1), parseInt(angkaPengurangan2))
        console.log(`Hasil pengurangan ${angkaPengurangan1} dan ${angkaPengurangan2} adalah ${hasil}`);

        rl.close();
    })
});

// nomor 3
rl.question('angka pertama yang akan dikalikan? ', (angkaPerkalian1) => {
    rl.question('angka kedua yang mau dikalikan? ', (angkaPerkalian2)=> {
        const hasil = kali(parseInt(angkaPerkalian1), parseInt(angkaPerkalian2))
        console.log(`Hasil perkalian ${angkaPerkalian1} dan ${angkaPerkalian2} adalah ${hasil}`);

        rl.close();
    })
});

// nomor 4
rl.question('angka pertama yang akan dibagi? ', (angkaPembagian1) => {
    rl.question('angka kedua yang mau dibagi? ', (angkaPembagian2)=> {
        const hasil = bagi(parseInt(angkaPembagian1), parseInt(angkaPembagian2))
        console.log(`Hasil pembagian ${angkaPembagian1} dan ${angkaPembagian2} adalah ${hasil}`);

        rl.close();
    })
});

// nomor 5
rl.question('harga? ', (harga) => {
    rl.question('quantitas barang? ', (quantitas)=> {
        const hasil = kali(parseInt(harga), parseInt(quantitas))
        console.log(`Hasil perkalian total harga ${harga} dan kuantitas ${quantitas} adalah ${hasil}`);

        rl.close();
    })
});