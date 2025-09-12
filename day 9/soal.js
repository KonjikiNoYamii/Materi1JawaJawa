// soal 1
let perpustakaan = {};
// soal 2
let daftarPengunjung = [];

// soal 3

// object dibungkus menggunakan kurung kurawal ({}), array dibungkus menggunakan kurung siku ([])

// soal 4
// -- bagian bagian object terdiri dari key yang mana itu adalah label dan value itu adalah sebuah nilai dari label tersebut
// -- bagian bagian array tediri dari indeks yaitu yang number yang mewakili urutan value dari array dan value adalah item

// soal 5
perpustakaan = {
  nama: "Perpustakaan Kota",
  alamat: "Jl. Pendidikan No. 123",
  tahunBerdiri: 1995,
};
console.log(perpustakaan);

// soal 6
daftarPengunjung = ["Yami", "Atri", "Yue"];
console.log(daftarPengunjung);

// soal 7
let PerpustakaanDigitalKota = { ...perpustakaan };
console.log(PerpustakaanDigitalKota);

// soal 8
daftarPengunjung[0] = "Ahmad Budi";
console.log(daftarPengunjung);

// soal 9
PerpustakaanDigitalKota.jumlahBuku = 5000;
console.log(PerpustakaanDigitalKota);

// soal 10
daftarPengunjung.push("Sari Dewi");
console.log(daftarPengunjung);

// soal 11
let kategoriBuku = [
  ["Fiksi", "Non-Fiksi"],
  ["Sains", "Sejarah", "Biografi"],
];

// let soal 12
PerpustakaanDigitalKota.fasilitasPerpustakaan = {
  ruangBaca: { kapasitas: 100, lantai: 1 },
  ruangKomputer: { kapasitas: 20, lantai: 2 },
};
console.log(PerpustakaanDigitalKota);

// soal 13
delete PerpustakaanDigitalKota.tahunBerdiri;
console.log(PerpustakaanDigitalKota);

// soal 14
let namaIstri = {
  nama: "Yami",
  "status saat ini": "sudah bersuami",
  566: 677,
  umur_terkini: 28,
};
console.log(`==================================`);

// soal 15
for (let a in perpustakaan) {
  console.log(perpustakaan[a]);
}
console.log(`==================================`);

// soal 16
for (let a in PerpustakaanDigitalKota) {
  if (typeof PerpustakaanDigitalKota[a]) {
    console.log(PerpustakaanDigitalKota[a]);
  }
}
console.log(`==================================`);

// soal 17
let cabangPerpustakaan = { ...perpustakaan };
console.log(cabangPerpustakaan);
cabangPerpustakaan.nama = "Perpustakaan Digital Cabang Selatan";
console.log(cabangPerpustakaan.nama);
console.log(`==================================`);

// soal 18
let sistemPerpustakaan = {
  tumbal: [],
  tambahBuku: function (judul, pengarang) {
    let bukuBuku = { judul: judul, pengarang: pengarang };
    sistemPerpustakaan.tumbal.push(bukuBuku);
  },
  cariBuku: function (judul1) {
    let bukuDitemukan = sistemPerpustakaan.tumbal.find(
      (item) => item.judul === judul1
    );
    if (bukuDitemukan) {
      return `Buku ${bukuDitemukan.judul} dengan nama pengarang ${bukuDitemukan.pengarang}`;
    }
  },
  hitungTotalBuku: function () {
    return `Total buku saat ini: ${sistemPerpustakaan.tumbal.length}`;
  },
  tampilkanInfo: function () {
    console.log("Daftar Buku di Perpustakaan:");
    sistemPerpustakaan.tumbal.forEach((buku, i) => {
      console.log(`${i + 1}. "${buku.judul}" oleh ${buku.pengarang}`);
    });
  },
};
sistemPerpustakaan.tambahBuku("Laskar Pelangi", "Andrea Hirata");
sistemPerpustakaan.tambahBuku("Bumi Manusia", "Pramoedya Ananta Toer");

console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
console.log(sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();

console.log(`==================================`);
console.log(`INFORMASI PERPUSTAKAAN DIGITAL`);
console.log(`==================================`);
console.log(`Nama Perpustakaan: ${PerpustakaanDigitalKota.nama}`);
console.log(`Alamat: ${PerpustakaanDigitalKota.alamat}`);
console.log(`jumlahBuku: ${PerpustakaanDigitalKota.jumlahBuku}`);
console.log(`==================================`);
console.log(`FASILITAS TERSEDIA`);
console.log(`==================================`);
console.log(PerpustakaanDigitalKota.fasilitasPerpustakaan);
console.log(`==================================`);
console.log(`KOLEKSI BUKU TERBARU`);
console.log(`==================================`);
sistemPerpustakaan.tampilkanInfo();
console.log(`==================================`);
console.log(daftarPengunjung);
console.log(`==================================`);
let statusPerpustakaan = {
  "Status Sistem": "✅ Online",
  "Terakhir diupdate": "11 September 2025",
};
console.log(statusPerpustakaan);
