const readlineSync = require('readline-sync');

//Perulangan FOR
//1. FOR ascending
for(let i = 1; i <= 10; i++){
    console.log("Perulangan for ke-" + i);
}

//2. FOR descending
for(let j = 10; j >= 1; j--){
    console.log("Perulangan for ke-" + j);
}

//3. FOR in
let products = ["computer", "smartphone", "flashdisk", "printer"];
for(i in products){
    console.log(i + ". "+ products[i]);
}


//Perulangan FOR-EACH
let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
days.forEach((day) => {
    console.log(day);
});

//Perulangan REPEAT
console.log("STT Indonesia \n".repeat(100));

//Perulangan WHILE
let x = 1;
while(x <= 5)
{
    console.log("Perulangan while ke-" + x);
    if(x == 3){
        break;
    }
    x = x + 1;
}

//Perulangan DO-WHILE
//Contoh 1
let konfirmasi;
do{
    console.log("SELAMAT DATANG DI STTI TANJUNGPINANG");
    konfirmasi = readlineSync.question("Apakah anda ingin mencetak lagi (tekan y/n): ");
}while(konfirmasi=="y");
console.log("===ANDA TELAH KELUAR, TERIMA KASIH===");

//Contoh 2
let alas, tinggi, luas;
let confirmation;
do{
    console.log("===PROGRAM MENGHITUNG LUAS SEGITIGA===");
    alas = readlineSync.question('Silahkan input nilai alas: ');
    tinggi = readlineSync.question('Silahkan input nilai tinggi: ');
    luas = 0.5 * alas * tinggi;
    console.log("Hasil Luas Segitiga: " + luas);
    confirmation = readlineSync.question("Apakah anda ingin menghitung kembali (tekan y/n): ");
}while(confirmation=="y");
console.log("===ANDA TELAH KELUAR MENGHITUNG LUAS SEGITIGA, TERIMA KASIH===");

