const readlineSync = require('readline-sync');

//list data barang
let dataBarang = ["Buku Tulis","Pensil","Spidol"];

function showBarang(){
    for(i in dataBarang){
        console.log("Barang ke-" + i + ": "+ dataBarang[i]);
    }
}

function addBarang(){
    let barang = readlineSync.question('Silahkan input barang: ');
    dataBarang.push(barang);
    showBarang();
}

function editBarang(){
    let noBarang = readlineSync.question('Masukan nomor barang yang ingin di ubah: ');
    let newBarang = readlineSync.question('Silahkan masukan nama barang baru: ');
    dataBarang[noBarang] = newBarang;
    showBarang();
}

function deleteBarang(){
    let noBarang = readlineSync.question('Masukan nomor barang yang ingin di hapus: ');
    dataBarang.splice(noBarang, 1);
    showBarang();
}

do{
    console.log("===MENU PROGRAM DATA BARANG===");
    console.log("1. Tampil Barang");
    console.log("2. Tambah Barang");
    console.log("3. Edit Barang");
    console.log("4. Delete Barang");
    var pilih = readlineSync.question("Masukan pilihan anda (1/2/3/4): ");
    if(pilih == 1){
        showBarang();
    }else if(pilih == 2){
        addBarang();
    }else if(pilih == 3){
        editBarang();
    }else if(pilih == 4){
        deleteBarang();
    }
}while(1);








