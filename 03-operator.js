//operator aritmatika
let a = 20;
let b = 5;
console.log(a + b);     //penjumlahan
console.log(a - b);     //pengurangan
console.log(a * b);     //perkalian
console.log(a ** b);    //pemangkatan
console.log(a / b);     //pembagian
console.log(a % b);     //modulus

//studi kasus operator aritmatika - program luas segitiga
let alas, tinggi, luas;
alas = 20;
tinggi = 5;
luas = 0.5 * alas * tinggi;
console.log(luas);


//operator perbandingan
let x = 5;
let y = 3;
console.log(x > y);     //lebih besar
console.log(x < y);     //lebih kecil
console.log(x == y);    //sama dengan opsi 1
console.log(x === y);   //sama dengan opsi 2
console.log(x != y);    //tidak sama dengan opsi 1
console.log(x !== y);   //tidak sama dengan opsi 2
console.log(x >= y);    //lebih besar sama dengan
console.log(x <= y);    //lebih kecil sama dengan

//studi kasus operator perbandingan - program menghitung nilai kelulusan
let nilaiUjian, ambangBatas, hasilKelulusan;
nilaiUjian = 70;
ambangBatas = 50;
hasilKelulusan = nilaiUjian > 50;
console.log(hasilKelulusan);

//operator ternary
hasilKelulusan = (nilaiUjian > 50) ? "Anda Lulus" : "Anda Tidak Lulus";
console.log(hasilKelulusan);

