// log
//penggunaan yang lebih luas dan terstruktur
console.log("Koentji Kemenangan Adalah Jawa");

// info
//hanya untuk menampilkan info
console.info("sekedar ingfo");

//warn
//Tujuan: Memberi peringatan (warna kuning).
//Kapan dipakai: Jika ada sesuatu yang tidak salah, tapi harus diperhatikan
let umur = 120
if (umur <= 18) {
    console.warn("Lu masih bocah mening keluar!");
}
else {
    console.warn("aman sentoso")
}
//Error
//sama aja cuma beda logo
let tampilkan = document.getElementById('tag1');
let umurIstri = 2000;

if (umurIstri <= 18) {
    console.error(umurIstri + "belum cukup umur");
    tampilkan.innerHTML = "Kutunggu Beberapa tahun lagi";
}
else {
    tampilkan.innerHTML = "Ayo nikah";
}

//assert
//dieksekusi dan memunculkan error jika bernilai false
let kebenaranUmur = 9
console.assert(kebenaranUmur >= 18);

//table
//membuat tabel
let tabel = [
    {istri: "Yami",yangKe:"1"},
    {istri: "Yue",yangKe:"2"},
    {istri: "Sora",yangKe:"3"}    
];
console.table(tabel);

//time
//menghitung waktu
console.time("ngitoeng");
let a = 1
let b = 3
let c = a + 3
console.timeLog("ngitoeng","Proses ngitung");
let d = c + a * b
console.timeEnd("ngitoeng","Akhir hitungan");

//count
//hitung
let istriFirst = "Yami"
console.count(istriFirst);
console.count(istriFirst);
console.count(istriFirst);
console.count(istriFirst);
console.countReset(istriFirst);
console.count(istriFirst);

//group
//grouping

console.group("Info Mahasiswa");
console.log("Nama: Yui");
console.log("Umur: 18");
console.groupEnd();

//alert
//muncul notif
let wife = "Yami"
alert("Halo " + wife + "selamat datang!");

//confirm
//confirmation

let yakin = confirm("Apakah anda ingin lanjut?");
if (yakin) {
  console.log("anda memilih lanjut");
} else {
  console.log("anda membatalkan");
}

//Prompt
//masukan input
let nama = prompt("Siapa nama Master?");
if (nama) {
  console.log("Halo " + nama);
}

//document.getElementById() dan innerHTML
//Mengambil sebuah Id

let tampilin = document.getElementById("tag2");
tampilin.innerHTML = "Halo dunia"

