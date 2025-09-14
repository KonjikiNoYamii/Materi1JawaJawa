const mahasiswa = {
  alice: { math: 85, english: 90, science: 88 },
  bob: { math: 78, english: 85, science: 82 },
  carol: { math: 92, english: 89, science: 94 },
};
const dataTambahan = { david: { math: 88, english: 91, science: 85 } };
// 1
let namaMahasiswa = Object.keys(mahasiswa);
console.log(namaMahasiswa + "\n");
console.log("======================================================");

// 2
function hitung(mahaSiswa) {
  for (let a in mahaSiswa) {
    let nilai = Object.values(mahaSiswa[a]);
    const total = [...nilai].reduce((sum, h) => sum + h, 0);
    let nilaiRataRata = total / nilai.length;
    console.log(`${a} rata rata nilai : ${nilaiRataRata.toFixed(2)}\n`);
  }
}
hitung(mahasiswa);
console.log("======================================================");

// 3
for ([nama, values] of Object.entries(mahasiswa)) {
  console.log(`${nama} ${Object.entries(values)}\n`);
}
console.log("======================================================");

// 4
let mahaSiswaDupe = { ...mahasiswa, ...dataTambahan };
console.log(mahaSiswaDupe);
console.log("======================================================");

// soal 5
const playlist = [
  { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
  { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
  { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
  { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 },
];
let filterPlaylist = playlist.filter((item) => item.juz === 1);
let ambil = filterPlaylist.map((item) => item.judul);
console.log(ambil);
let [surat1, ...surat2] = ambil;
console.log(`${surat1} dan ${surat2} dari juz 1`);
console.log("======================================================");

// soal 6
let ambilDurasi = playlist.map((item) => item.durasi);
let itungDurasi = ambilDurasi.reduce((naw, nak) => naw + nak);
let menitDurasi = itungDurasi / 60;
let jamDurasi = menitDurasi / 60;
console.log(
  `total ${itungDurasi} detik, ${menitDurasi} menit atau ${jamDurasi.toFixed(
    2
  )} jam `
);

// soal 7
let suratQari = playlist.map(({ judul, qari }) => {
  return `${judul} - ${qari}`;
});
console.log(suratQari);

// soal 8
let ambilSuratDurasi = playlist.reduce((naw, nak) => {
  if (naw.durasi > nak.durasi) {
    return naw;
  } else {
    return nak;
  }
});
console.log(
  `${ambilSuratDurasi.judul} (${ambilSuratDurasi.durasi} detik atau ${
    ambilSuratDurasi.durasi / 60
  }) menit`
);

// soal 9
const playlist2 = {
  judul: "An-nas",
  qari: "muhammad zaki attariq",
  durasi: 100,
  juz: 30,
};

let gabungPlayList1 = [playlist2, ...playlist];
console.log(gabungPlayList1);

// soal 10

const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];

let pecahJumlah = [...pengeluaran]
let totalPengeluaran = pecahJumlah.reduce((sum,{jumlah})=> sum + jumlah,0)
console.log("total " + totalPengeluaran)

// soal 11

let pecahJumlah1 = [...pengeluaran] // dipecah terlebih dahulu
let totalPengeluaran1 = pecahJumlah1.reduce((sum,{jumlah,kategori})=> {  // sum sebagai nilai awal dan {jumlah,kategori} sebagai item spesifik yaitu item,jumlah dan item.kategori
sum[kategori]= (sum[kategori] || 0) + jumlah; // sum[kategori] akan dijumlahkan jika sum[kategori]/umdifined saat awal maka akan dibuah menjadi 0 agar bisa menampung number dan bisa dijumlahkan dengan "jumlah"
return sum

},{}) // menggunakan object sebagai nilai awal sum untuk menampung semua iterasi dalam bentuk object
console.log(totalPengeluaran1);


// soal 12
let pecahJumlah2 = [...pengeluaran]
let hitungPengeluaran = pengeluaran.reduce((sum,{hari, jumlah}) => {
  sum[hari] = (sum[hari] || 0) + jumlah
  return sum
},{})
console.log(hitungPengeluaran);

// soal 13
let pengeluaranTerbesar = pengeluaran.reduce((naw,nak)=>{
  if (naw.jumlah > nak.jumlah) {
    return naw 
  }else{
    return nak
  }
},{})
console.log(pengeluaranTerbesar);

// soal 14
let filterPengeluaran = pengeluaran.filter(item =>item.jumlah >= 25000)
console.log(filterPengeluaran.length + " pengeluaran >= 25000");

// soal 15
const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

let gabungkanKontak = {...Object.fromEntries(kontakBaru),...kontakLama}
console.log(gabungkanKontak);

// soal 16
let filterNomor = Object.values(gabungkanKontak)
console.log(filterNomor);

// soal 17
const formatKontak = Object.fromEntries(
    Object.entries(gabungkanKontak).map(([nama, nomor]) => [nama, nomor * 1])
);
console.log(formatKontak);

// soal 18
let formatKontak1 = Object.entries(formatKontak)
let tambahFrefix = formatKontak1.map(([key,values])=>{
  return [key, `+62${values}`]
})
const kontakPrefix = {...Object.fromEntries(tambahFrefix)}
console.log(kontakPrefix);

// soal 19
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];

const rataRataTugas = nilaiKelas.map(({ nama, tugas }) => {
  // spread tugas ke array baru 
  const semuaTugas = [...tugas]; 

  // hitung total dengan reduce
  const totalTugas = semuaTugas.reduce((sum, nilai) => sum + nilai);

  // hitung rata-rata
  const rataRata = totalTugas / semuaTugas.length;

  return { nama, rataRata }; // return sebuah object
});

console.log(rataRataTugas);


// soal 20
const nilaiAkhir = [];

for (const siswa of nilaiKelas) {
  // destructuring langsung ambil nama, tugas, uts, uas
  const { nama, tugas, uts, uas } = siswa;

  // hitung rata-rata tugas
  const rataTugas = [...tugas].reduce((sum, n) => sum + n, 0) / tugas.length;

  // hitung nilai akhir: tugas 30%, UTS 30%, UAS 40%
  const akhir = rataTugas * 0.3 + uts * 0.3 + uas * 0.4;

  nilaiAkhir.push({ nama, nilaiAkhir: akhir });
}

console.log(nilaiAkhir);

// 21
let siswaLulus = nilaiAkhir.filter(item => item.nilaiAkhir >= 80,
  console.log("semua siswa lulus")
  
)

// soal 22
let siswaTerbaik = nilaiAkhir.reduce((naw,nak) => {
  if (naw.nilaiAkhir < nak.nilaiAkhir) {
    return nak
  }else{
    return naw
  }
})
console.log(`siswa terbaik ${siswaTerbaik.nama} (nilai akhir tertinggi)`);

// soal 23
let siswaLulus1 = nilaiAkhir.filter(item => {
  item.nilaiAkhir >= 80
  console.log([`${Object.values(item)} (lulus)`]);
  
}
)

