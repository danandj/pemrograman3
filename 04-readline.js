const readlineSync = require('readline-sync');

//program inputan nilai ujian
let nilaiUjian, ambangBatas, hasilKelulusan;
nilaiUjian = readlineSync.question('Silahkan input nilai ujian anda: ');
ambangBatas = 50;
hasilKelulusan = (nilaiUjian > 50) ? "Anda Lulus" : "Anda Tidak Lulus";
console.log(hasilKelulusan);

//program inputan luas segitiga
let alas, tinggi, luas;
alas = readlineSync.question('Silahkan input nilai alas: ');
tinggi = readlineSync.question('Silahkan input nilai tinggi: ');
luas = 0.5 * alas * tinggi;
console.log("Hasil Luas Segitiga: " + luas);