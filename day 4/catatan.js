/******************************************
 * 📘 CATATAN BESAR: FUNCTION (FUNGSI)
 * Disusun oleh Silica untuk Master 💖
 ******************************************/

/*
===========================================
 🔹 Apa itu Fungsi?
===========================================
Fungsi adalah blok kode yang bisa dipanggil
berulang kali untuk melakukan suatu tugas.
Struktur dasar:
function namaFungsi(parameter) {
    // isi kode
    return hasil;
}
*/


/******************************************
 * 1. FUNCTION PALING MUDAH
 ******************************************/

// Fungsi tanpa parameter, hanya memberi salam
function sapa() {
    console.log("Halo Master, ini fungsi sederhana ✨");
}
sapa(); // memanggil fungsi


/******************************************
 * 2. FUNCTION DENGAN PARAMETER
 ******************************************/

// Fungsi dengan parameter nama
function sapaNama(nama) {
    console.log("Halo, " + nama + "! Senang bertemu denganmu 😳");
}
sapaNama("Zidan");
sapaNama("Silica");


// Fungsi dengan dua parameter (menjumlahkan angka)
function tambah(a, b) {
    return a + b;
}
console.log("Hasil tambah:", tambah(5, 7));


/******************************************
 * 3. FUNCTION DENGAN RETURN & LOGIKA
 ******************************************/

// Fungsi cek kelulusan
function cekKelulusan(nilai) {
    if (nilai >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
console.log("Nilai 80 →", cekKelulusan(80));
console.log("Nilai 60 →", cekKelulusan(60));


/******************************************
 * 4. FUNCTION DENGAN ARRAY & LOOP
 ******************************************/

// Fungsi hitung rata-rata array angka
function rataRata(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
let nilaiUjian = [80, 70, 90, 100];
console.log("Rata-rata nilai:", rataRata(nilaiUjian));


/******************************************
 * 5. FUNCTION DENGAN OBJECT
 ******************************************/

// Fungsi ambil data dari object siswa
function infoSiswa(siswa) {
    return `${siswa.nama} berumur ${siswa.umur} tahun dan nilainya ${siswa.nilai}`;
}
let siswa1 = { nama: "Andi", umur: 16, nilai: 85 };
console.log(infoSiswa(siswa1));


/******************************************
 * 6. FUNCTION EXPRESSION & ARROW FUNCTION
 ******************************************/

// Function Expression
let kali = function(a, b) {
    return a * b;
};
console.log("Hasil kali:", kali(4, 6));

// Arrow Function
let bagi = (a, b) => a / b;
console.log("Hasil bagi:", bagi(20, 5));


/******************************************
 * 7. FUNCTION DALAM FUNCTION (NESTED)
 ******************************************/

function operasiHitung(a, b) {
    function kuadrat(x) {
        return x * x;
    }
    return kuadrat(a) + kuadrat(b);
}
console.log("Hasil nested function:", operasiHitung(3, 4)); // 25


/******************************************
 * 8. FUNCTION KOMPLEKS: SIMULASI SISTEM
 ******************************************/

// Fungsi cek stok toko sederhana
function cekToko(toko, namaBarang) {
    for (let i = 0; i < toko.length; i++) {
        if (toko[i].nama === namaBarang) {
            if (toko[i].stok > 0) {
                return `${namaBarang} tersedia, stok: ${toko[i].stok}`;
            } else {
                return `${namaBarang} habis 😭`;
            }
        }
    }
    return "Barang tidak ditemukan!";
}

let tokoMini = [
    { nama: "Laptop", stok: 3 },
    { nama: "HP", stok: 0 },
    { nama: "Mouse", stok: 10 }
];
console.log(cekToko(tokoMini, "Laptop"));
console.log(cekToko(tokoMini, "HP"));
console.log(cekToko(tokoMini, "Headset"));


/******************************************
 * 📌 RANGKUMAN
 ******************************************
 1️⃣ Fungsi sederhana → tanpa parameter
 2️⃣ Fungsi dengan parameter & return
 3️⃣ Fungsi dengan logika if-else
 4️⃣ Fungsi + array (hitung rata-rata)
 5️⃣ Fungsi + object
 6️⃣ Function expression & arrow function
 7️⃣ Nested function
 8️⃣ Fungsi kompleks simulasi toko
 ******************************************/

 /******************************************
 * 📘 CATATAN BESAR: LOOPING (PERULANGAN)
 * Disusun oleh Silica untuk Master 💖
 ******************************************/

/*
===========================================
 🔹 Apa itu Looping?
===========================================
Looping adalah perulangan kode yang berjalan
berulang kali sesuai kondisi tertentu.
Jenis-jenis loop utama di JavaScript:
 1️⃣ while
 2️⃣ do...while
 3️⃣ for (biasa → sudah Master catat, dilewati dulu)
 4️⃣ for...in
 5️⃣ for...of
*/


/******************************************
 * 1. WHILE LOOP (contoh mudah)
 ******************************************/

// Perulangan while berjalan selama kondisi benar
let i = 1;
while (i <= 5) {
    console.log("While Loop ke-", i);
    i++;
}


/******************************************
 * 2. DO...WHILE (contoh mudah)
 ******************************************/

// Do...while akan jalankan isi minimal sekali,
// meskipun kondisi salah sejak awal.
let j = 1;
do {
    console.log("Do While ke-", j);
    j++;
} while (j <= 5);


/******************************************
 * 3. FOR...IN (iterasi properti object)
 ******************************************/

let siswa = { nama: "Andi", umur: 17, nilai: 90 };
for (let key in siswa) {
    console.log(key, ":", siswa[key]);
}
// output → nama: Andi, umur: 17, nilai: 90


/******************************************
 * 4. FOR...OF (iterasi nilai dalam iterable)
 ******************************************/

let buah = ["apel", "jeruk", "mangga"];
for (let item of buah) {
    console.log("Buah:", item);
}


/******************************************
 * 5. WHILE LEBIH KOMPLEKS
 ******************************************/

// Hitung jumlah digit angka (misalnya 98765)
function hitungDigit(angka) {
    let count = 0;
    while (angka > 0) {
        angka = Math.floor(angka / 10);
        count++;
    }
    return count;
}
console.log("Jumlah digit:", hitungDigit(98765));


/******************************************
 * 6. DO...WHILE LEBIH KOMPLEKS
 ******************************************/

// Simulasi login sederhana (maksimal 3 percobaan)
let passwordBenar = "silica";
let percobaan = 0;
let input;
do {
    percobaan++;
    // simulasi input user
    input = percobaan === 3 ? "silica" : "salah";
    console.log(`Percobaan ${percobaan}:`, input);

    if (input === passwordBenar) {
        console.log("Login berhasil 🎉");
        break;
    }
} while (percobaan < 3);


/******************************************
 * 7. FOR...IN LEBIH KOMPLEKS
 ******************************************/

// Laporan nilai tiap siswa dari object bersarang
let kelas = {
    Andi: { Matematika: 80, Fisika: 75, Kimia: 90 },
    Budi: { Matematika: 60, Fisika: 55, Kimia: 65 },
    Cici: { Matematika: 95, Fisika: 88, Kimia: 92 }
};

for (let nama in kelas) {
    let total = 0;
    let jumlah = 0;
    for (let mapel in kelas[nama]) {
        total += kelas[nama][mapel];
        jumlah++;
    }
    let rata = total / jumlah;
    console.log(`${nama} → rata-rata: ${rata}`);
}


/******************************************
 * 8. FOR...OF LEBIH KOMPLEKS
 ******************************************/

// Analisis teks → hitung huruf vokal
function hitungVokal(teks) {
    let vokal = "aiueoAIUEO";
    let jumlah = 0;

    for (let huruf of teks) {
        if (vokal.includes(huruf)) {
            jumlah++;
        }
    }
    return jumlah;
}
console.log("Jumlah vokal:", hitungVokal("Silica Maid Cantik Banget Desuwah"));


/******************************************
 * 9. GABUNGAN LOOP (level kompleks)
 ******************************************/

// Simulasi kasir toko
let produk = [
    { nama: "Laptop", harga: 8000000, stok: 2 },
    { nama: "HP", harga: 4000000, stok: 1 },
    { nama: "Headset", harga: 200000, stok: 5 }
];

// Tampilkan stok awal
console.log("📦 Stok Awal:");
for (let p of produk) {
    console.log(`${p.nama} - Rp${p.harga} (${p.stok} stok)`);
}

// Proses pembelian pakai do...while (simulasi user)
let totalBelanja = 0;
let index = 0;
do {
    if (produk[index].stok > 0) {
        produk[index].stok--;
        totalBelanja += produk[index].harga;
        console.log(`🛒 Membeli ${produk[index].nama}`);
    }
    index++;
} while (index < produk.length);

// Rekap akhir pakai for...in
console.log("📊 Stok Akhir:");
for (let idx in produk) {
    console.log(`${produk[idx].nama} → ${produk[idx].stok} tersisa`);
}

console.log("💰 Total belanja:", totalBelanja);


/******************************************
 * 📌 RANGKUMAN
 ******************************************
 1️⃣ while → cocok untuk perulangan sampai kondisi tercapai
 2️⃣ do...while → cocok kalau minimal 1 kali jalan
 3️⃣ for...in → iterasi property object
 4️⃣ for...of → iterasi isi array/string
 5️⃣ Bisa digabung untuk kasus nyata:
     - cek digit angka
     - simulasi login
     - laporan nilai
     - analisis teks
     - simulasi kasir toko
 ******************************************/
