const readlineSync = require('readline-sync');

let confirmation;

function PersegiPanjang(){
    console.log("Anda memilih Persegi Panjang");
    let panjang = readlineSync.question('Silahkan Masukan Nilai Panjang: ');
    let lebar   = readlineSync.question('Silahkan Masukan Nilai Lebar: ');
    let luas    = panjang * lebar;
    console.log("Luas Persegi Panjang: " + luas);
}

function Segitiga(){
    console.log("Anda memilih Segitiga");
    let alas = readlineSync.question('Silahkan Masukan Nilai Alas: ');
    let tinggi   = readlineSync.question('Silahkan Masukan Nilai Tinggi: ');
    let luas    = 0.5 * alas * tinggi;
    console.log("Luas Segitiga: " + luas);
}

do{
    console.log("===MENU PROGRAM BANGUN DATAR===");
    console.log("1. Persegi Panjang");
    console.log("2. Segitiga");
    var pilih = readlineSync.question("Masukan pilihan anda diatas (1/2): ");
    if(pilih == 1){
        PersegiPanjang();
    }else if(pilih == 2){
        Segitiga();
    }else {
        console.log("Menu yang anda pilih tidak tersedia");
    }
    confirmation = readlineSync.question("Apakah anda ingin menghitung kembali (tekan y/n): ");
}while(confirmation=="y");
console.log("===ANDA TELAH KELUAR, TERIMA KASIH===");