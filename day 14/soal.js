// soal 1
const dataSiswa = {
  nama: "Yami",
  umur: 28,
  jurusan: "IPA",
};
const rubah = JSON.stringify(dataSiswa);
console.log(rubah);

// soal 2
const barang = { produk: "Laptop", harga: 7500000, stok: 10 };
console.log(JSON.stringify(barang));

// soal 3
const barangBelanjaan = [
  { nama: "Laptop", jumlah: 3, harga: 5000000 },
  { nama: "Smartphone", jumlah: 10, harga: 2000000 },
];
console.log(JSON.stringify(barangBelanjaan));

// soal 4
const orang = `{"nama":"Budi","usia":21,"status":"Mahasiswa"}`;
const rubahKeObject = JSON.parse(orang);
console.log(rubahKeObject.nama);
console.log(rubahKeObject.status);

// soal 5
const buah = `["apel","jeruk","pisang"]`;
const buah1 = JSON.parse(buah);
buah1.forEach((item) => {
  console.log(item);
});

// soal 6
const mobil = `{ "merk": "Honda", "model": "Civic", "tahun": 2022 }`;
const mobil1 = JSON.parse(mobil);
for (let a in mobil1) {
  console.log(`${a} ${mobil1[a]}`);
}

// soal 7
let namaSiswa = "Yami";
function sapaUser(nama, callback) {
  console.log("Halo " + nama);
  callback();
}
function sapaUser2() {
  console.log("Selamat belajar JSON");
}
sapaUser(namaSiswa, sapaUser2);

// soal 8
let pnjg = 5;
let lbr = 5;
function hitungLuas(panjang, lebar, callback) {
  let hasil = panjang * lebar;
  callback(hasil);
}
function hasilHitung(hasil) {
  console.log(hasil);
}
hitungLuas(pnjg, lbr, hasilHitung);

// soal 9
let arrayy = [1, 432, 54, 34, 45];
function prosesData(data, callback) {
  let panjangArr = data.length;
  callback(panjangArr);
}
function tampilkanArray(panjangArr) {
  console.log(panjangArr);
}
prosesData(arrayy, tampilkanArray);

// soal 10
function sapaUser(nama, callback) {
  console.log("Halo " + nama);
  callback();
}
sapaUser("Aisyah", function () {
  console.log("sampai jumpa !!");
});

// soal 11
function kirimPesan(pesan, callback) {
  callback(pesan);
}

kirimPesan("Ayo gulingkan pemerintahan", function (pesan) {
  console.log(pesan.toUpperCase());
});

// soal 12
function prosesAsync(callback) {
  console.log("pesan akan muncul dalam 2 detik");

  setTimeout(() => {
    callback("Pesan ini muncul setelah 2 detik");
  }, 2000);
}

prosesAsync(function (pesan) {
  console.log(pesan);
});

// soal 13
function ambilData(callback) {
  let barang = { id: 1, nama: "Laptop" };
  console.log("tunggu untuk melihat detail laptop dalam 3 detik");
  setTimeout(() => {
    callback(barang);
  }, 3000);
}
ambilData(function (barang) {
  console.log(barang);
});
