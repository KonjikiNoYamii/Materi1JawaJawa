// LEVEL 1

//soal 1
console.log("Halo,JawaScript!");

//soal 2
console.log(100 - 50);
console.log(10 * 5)

//soal 3
let nama = "Zidan ALbani";
let umur = 18;

console.log("halo nama saya " + nama);
console.log("Dan umur saya sat ini "+ umur);

//soal 4
alert("selamat datang");

//soal 5
alert(15 + 20);

//soal 6
prompt("MAsukan nama buah favorit");

//soal 7
let namaKota = prompt("Masukan nama kota asal");
if (namaKota) {
    alert("anda berasal dari kota " + namaKota);
}
else {
    alert("Minimal isi napa");
}
//soal 8
let tampilkanParagraf = document.getElementById('pesan');
tampilkanParagraf.innerHTML = "Ini adalah paragraf dengan javascript"
    
//soal 9
let tampilkanJudul = document.getElementById('judul');
tampilkanJudul.innerHTML = "Tugas Selesai!";

//soal 10
let hasilHitung = document.getElementById('hasil-hitung');
let a = 20
let b = 5
let c = 10
let hitungan = a / b + c
console.log(hitungan);
hasilHitung.innerHTML = hitungan;

// level 2

//soal 1
 let namaAwal = "Zidan"
 let namaPanjang = " Albani"
 console.log("Halo " + namaAwal + namaPanjang);

 //soal 2
 let hargaBarang1 = 5000
 let  hargaBarang2 = 10000
 console.log(hargaBarang1 + hargaBarang2);

 //soal 3
 let Peringatan = prompt("Masukan kata")
 alert(Peringatan)

 //soal 4
let inputAngka = prompt("Masukan Angka")
let outputAngka = inputAngka
console.log(outputAngka * 2);

//soal 5
let agree = confirm("Apakah anda setuju dengan kebijakan kami?")
console.log(agree);

//soal 6
let inputNama = prompt("Masukan nama anda");
console.info("Informasi pengguna: " + inputNama);

//soal 7
let inputAngkaPertama = prompt("Masukan anghka pertama");
let inputAngkaKedua = prompt("Masukan angka kedua");
let hasilPerkalian = inputAngkaPertama * inputAngkaKedua
let hasilKali = document.getElementById('hasil-kali');
hasilKali.innerHTML = hasilPerkalian

//soal 8
console.warn("Peringatan! Website ini sedang dalam perbaikan");

//soal 9
let tombolError = document.getElementById("button");
tombolError.addEventListener("click", function(){
    console.error("Terjadi kesalahan pada data!");
});

//soal 10
let sapa = "selamat"
let waktu = " pagi"
console.log(sapa + waktu);

//level 3

//soal 1
let masukanAngka = Number(prompt("masukan angka"))
if (masukanAngka % 2 === 0) {
    console.log("ini angka genap");
}
else {
    console.log("ini angka ganjil");
}

//soal 2
let nilaiUjian = Number(prompt("masukan nilai ujianmu"));
if (nilaiUjian <= 70) {
    console.warn("RENMIDI MAMPUS")
}
else {
    console.info("lulus")
}

//soal 3
let tanyaJawa = prompt("Siapakah pencipta JavaScript?");
if (tanyaJawa == "Brendan Eich"){
    alert("Jawa ban kamu benar!");
}
else {
    alert("Jawaban kamu salah.Coba lagi!");
}

//soal 4
console.group();
console.log("nama: zidan");
console.log("pekerjaan: Pembunuh bayaran");
console.log("usia: 200 tahun");
console.groupEnd();

//soal 5
let angkaFirst = Number(prompt("Masukan angka pertama"));
let angkaSecond = Number(prompt("Masukan angka kedua"));
let dibandingin = [
    { Keterangan:"perbandingan antara",hasil: angkaFirst > angkaSecond},
    { Keterangan:"perbandingan antara",hasil: angkaFirst < angkaSecond},
    { Keterangan:"perbandingan antara",hasil: angkaFirst == angkaSecond}
];
console.table(dibandingin);

//soal 6
let inputAge = Number(prompt("Masukan Usia"));
if (inputAge => 13 && inputAge <= 19) {
    alert("anda berusia remaja");
}
else {
    alert("anda bukan remaja");
}
//soal 7
let totalBelanjaan = Number(prompt("Total pemborosan anda"));
if (totalBelanjaan >= 100000) {
    alert("Anda mendapatkan Diskon 10%");
}
else {
    alert("Lebih boros lag");
}

//soal 8
let konfirmasi = document.getElementById('status')
let nanya = confirm("Apakah anda ingin melanjutkan?")
if (nanya){
    konfirmasi.innerHTML = "Anda melanjutkan"
}
else {
    konfirmasi.innerHTML = "Anda membatalkan"
}