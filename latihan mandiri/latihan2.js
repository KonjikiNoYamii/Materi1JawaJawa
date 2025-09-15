const siswa = [
  { nama: "Alice", umur: 17 },
  { nama: "Bob", umur: 18 },
  { nama: "Carol", umur: 17 }
]
let ambilNama = siswa.map(({nama}) => nama)  // destrucing dalam map
console.log(ambilNama);

let ambilUmur = siswa.reduce((naw,{ umur }) => naw += umur,0)
console.log(ambilUmur);

let tambahkanKelas = siswa.map(data => ({...data, kelas: 12}));
console.log(tambahkanKelas);




const buku = [
  { judul: "Harry Potter", penulis: "J.K. Rowling" },
  { judul: "Lord of the Rings", penulis: "J.R.R. Tolkien" }
];

let tambahkanTahun = buku.map(data => ({...data, tahun: 2000}))
console.log(tambahkanTahun);

const karyawan = [
  { nama: "Ani", gaji: 5000 },
  { nama: "Budi", gaji: 6000 }
];

let tambahkanJabatan = karyawan.map(data => ({...data, jabatan : "Karyawan" }))
console.log(tambahkanJabatan);


const siswa1 = [
  { nama: "Alice", umur: 17, nilai: 85 },
  { nama: "Bob", umur: 18, nilai: 78 },
  { nama: "Carol", umur: 17, nilai: 92 },
  { nama: "Doni", umur: 19, nilai: 60 }
];

let filterNilai = siswa1.filter(({nilai}) => nilai >= 80)
let filterNama = filterNilai.map(({nama}) => nama)
console.log(filterNama);


const siswa2 = [
  { nama: "Alice", nilai: [80, 85, 90] },
  { nama: "Bob", nilai: [70, 75, 80] },
  { nama: "Carol", nilai: [90, 95, 100] }
];

let ambilNama1 = siswa2.map(({...nama})=> nama)
console.log(ambilNama);// 'Alice', 'Bob', 'Carol' ]

let totalNilai = siswa2.map(({nilai}) => {
    return nilai.reduce((naw,nak) => naw + nak / nilai.length,0) //biasakan return jika dalam object seperti ini
})
console.log(totalNilai);//[ 85, 75, 95 ]

let ratRataSeluruhKelas = totalNilai.reduce((naw,nak) => {
    return naw += nak 
})
console.log(ratRataSeluruhKelas);

let total = ratRataSeluruhKelas / totalNilai.length
console.log(total);


const produk = [
  { nama: "Buku", harga: 20000, stok: 10 },
  { nama: "Pulpen", harga: 5000, stok: 50 },
  { nama: "Tas", harga: 150000, stok: 5 },
  { nama: "Penggaris", harga: 7000, stok: 25 }
];

let namaProduk = produk.map(({nama}) => {
    return nama
})
console.log(namaProduk);

let totalHarga = produk.map(({harga}) =>{
    return harga
})
console.log(totalHarga);
let totalHarga1 = totalHarga.reduce((naw,nak) => {
    return naw + nak
})
console.log(totalHarga1);

let stokTerbanyak = produk.reduce((naw,nak)=>{ //mencari stok terbanyak
    if (naw.stok < nak.stok) {
        return nak
    }else{
        return naw
    }
})
console.log(stokTerbanyak);
