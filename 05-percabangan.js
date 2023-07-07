const readlineSync = require('readline-sync');

//Percabangan if
// let totalBelanja;
// totalBelanja = readlineSync.question('Silahkan input total belanja anda: ');
// if(totalBelanja > 100000){
//     console.log("Selamat Anda dapat hadiah");
// }
// console.log("Terimakasih sudah berbelanja di toko kami");

//Percabangan if-else
// let password;
// password = readlineSync.question('Silahkan masukan password anda: ');
// if(password == "stti"){
//     console.log("Berhasil Login, selamat datang di Portal E-Kampus STTI");
// }else{
//     console.log("Gagal login, anda salah memasukan password, silahkan ulangi");
// }


//Percabangan if-else-if
// let nilaiUjian, gradeNilai;
// gradeNilai = "";
// nilaiUjian = readlineSync.question('Silahkan masukan nilai ujian anda: ');
// if(nilaiUjian >= 90){
//     gradeNilai = "A";
// }else if(nilaiUjian >= 70){
//     gradeNilai = "B";
// }else if(nilaiUjian >= 50){
//     gradeNilai = "C";
// }else if(nilaiUjian >= 30){
//     gradeNilai = "D";
// }else{
//     gradeNilai = "E";
// }
// console.log("Grade nilai anda: " + gradeNilai);

//Percabangan switch-case
// let angkaHari, namaHari;
// angkaHari = readlineSync.question('Silahkan masukan angka hari 1-7 : ');
// switch(angkaHari){
//     case "1":
//         namaHari = "Senin";
//         break;
//     case "2":
//         namaHari = "Selasa";
//         break;
//     case "3":
//         namaHari = "Rabu";
//         break;  
//     case "4":
//         namaHari = "Kamis";
//         break;
//     case "5":
//         namaHari = "Jumat";
//         break;  
//     case "6":
//         namaHari = "Sabtu";
//         break;
//     case "7":
//         namaHari = "Minggu";
//         break;    
// }
// console.log("Nama hari ke-" + angkaHari + " adalah " + namaHari);

//Percabangan bersarang (nested)
// let username, password;
// username = readlineSync.question('Silahkan masukan username: ');
// password = readlineSync.question('Silahkan masukan password: ');
// if(username == "admin"){
//     if(password == "1234"){
//         console.log("Anda berhasil login.");
//     } else {
//         console.log("Password salah, coba lagi");
//     }
// } else {
//     console.log("Akun anda salah.");
// }