// ==========================================================
// 📘 Catatan Pengantar Modul JavaScript
// ==========================================================

// 🔹 Variabel
// Variabel di modul ini akan sering diulang-ulang.
// Tujuannya supaya Master terbiasa dengan cara deklarasi `let`, `const`, dan `var`.
// Jadi jangan bingung kalau ada variabel mirip muncul di beberapa bagian.
// Kalau di dunia nyata, nama variabel sebaiknya jelas dan deskriptif.

// 🔹 Operator
// Operator adalah dasar logika program.
// Karena itu operator muncul di banyak contoh: di function, di if else, di switch.
// Contoh:
//  - Aritmatika (+, -, *, /, %)
//  - Perbandingan (==, !=, ===, !==, >, <, >=, <=)
//  - Logika (&&, ||, !)
// Jadi jangan kaget kalau operator dipakai berulang kali dengan konteks berbeda.

// 🔹 Function
// Function dipakai untuk mengelompokkan kode biar rapi dan bisa dipanggil ulang.
// Di modul ini ada function sederhana (hanya console.log)
// dan ada juga yang digunakan untuk perhitungan / percabangan.
// Intinya, function = wadah kode yang bisa dipakai berulang.

// 🔹 If Else vs Switch
// - if else cocok untuk kondisi yang fleksibel (lebih besar, lebih kecil, kombinasi).
// - switch cocok untuk kondisi yang pilihannya pasti (contoh: nama hari, menu, warna).
// Karena itu modul ini membahas keduanya, bahkan ada versi switch di dalam function,
// supaya Master terbiasa dengan berbagai bentuk penggunaannya.

// 🔹 Looping
// Looping (for, while, for of, for in) penting untuk mengulang data.
// Modul ini menaruh looping sebelum array & object, supaya Master tidak bingung
// saat harus mengulang isi array atau properti object nantinya.

// 🔹 DOM
// DOM hanya jalan di browser, bukan di Node.js.
// Jadi kalau Master jalankan kode di terminal (Node.js), bagian DOM akan error.
// Bagian ini bisa dilewati kalau Master belajar lewat terminal.

// 🔹 JSON & Local Storage
// - JSON dipakai untuk komunikasi data antar browser & server.
// - Local Storage untuk simpan data sementara di browser Master.
// Bagian ini biasanya muncul kalau Master sudah mulai bikin aplikasi web.

// 🔹 Asynchronous
// Konsep yang agak sulit di awal.
// Dipakai untuk proses yang butuh waktu, misalnya: ambil data dari server (fetch).
// Jangan khawatir, nanti akan muncul di bagian akhir modul setelah dasar-dasarnya kuat.

// ==========================================================
// Catatan selesai. Mari masuk ke materi utama.
// ==========================================================

// ======================================================================================================================================================================

// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 1–3
// ===================================================

console.log("=== BAGIAN 1: VARIABEL & TIPE DATA ===");

// -------------------------------------
// VARIABEL
// -------------------------------------
// var = bisa redeclare (tidak disarankan, cakupan global)
// let = lebih aman, scope block
// const = tidak bisa di-reassign (wajib langsung diberi nilai)

var namaVar = "Saya pakai var";
let namaLet = "Saya pakai let";
const namaConst = "Saya pakai const";

console.log(namaVar);
console.log(namaLet);
console.log(namaConst);

// -------------------------------------
// TIPE DATA
// -------------------------------------
let nama = "Yumi";          // string
let umur = 17;              // number
let rajin = true;           // boolean
let kosong = null;          // null
let belumIsi;               // undefined
let hobi = ["Membaca", "Menggambar"]; // array
let istriMaster = { nama: "Yumi", umur: 17 }; // object

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Rajin:", rajin);
console.log("Kosong:", kosong);
console.log("Belum isi:", belumIsi);
console.log("Hobi:", hobi);
console.log("Istri Master:", istriMaster);

console.log("\n=== BAGIAN 2: OPERATOR ===");

// ===================================================
// OPERATOR ARITMATIKA
// ===================================================
let angka1 = 10;
let angka2 = 3;

console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2);
console.log("Perkalian:", angka1 * angka2);
console.log("Pembagian:", angka1 / angka2);
console.log("Modulus:", angka1 % angka2);
console.log("Pangkat:", angka1 ** angka2);

// Increment & Decrement
let nilai = 5;
nilai++;
console.log("Increment:", nilai);
nilai--;
console.log("Decrement:", nilai);

// ===================================================
// OPERATOR PERBANDINGAN
// ===================================================
let umurIstri = 18;
console.log("== :", umurIstri == "18");    // true
console.log("=== :", umurIstri === "18");  // false (beda tipe)
console.log("!= :", umurIstri != 20);      // true
console.log("> :", umurIstri > 15);        // true
console.log("<= :", umurIstri <= 17);      // false

// ===================================================
// OPERATOR LOGIKA
// ===================================================
let pintar = true;
let cantik = true;
let rajinIstri = false;

console.log("AND (&&):", pintar && cantik); 
console.log("OR (||):", pintar || rajinIstri); 
console.log("NOT (!):", !rajinIstri);

// ===================================================
// OPERATOR PENUGASAN
// ===================================================
let tabungan = 1000;
tabungan += 500;
console.log("+= :", tabungan); // 1500
tabungan *= 2;
console.log("*= :", tabungan); // 3000
tabungan %= 1000;
console.log("%= :", tabungan); // 0

// ===================================================
// OPERATOR TERNARY
// ===================================================
let umurMenikah = 20;
let statusMenikah = (umurMenikah >= 18) ? "Boleh menikah 💍" : "Belum boleh 😢";
console.log(statusMenikah);

console.log("\n=== BAGIAN 3: FUNCTION DASAR ===");

// -------------------------------------
// FUNCTION TANPA PARAMETER
function salam() {
    console.log("Halo istriMaster ❤️");
}
salam();

// -------------------------------------
// FUNCTION DENGAN PARAMETER
function salamNama(nama) {
    console.log("Halo " + nama + ", istri tercinta Master~ 💖");
}
salamNama("Yumi");
salamNama("Sakura");

// -------------------------------------
// FUNCTION DENGAN RETURN
function tambah(a, b) {
    return a + b;
}
let hasilTambah = tambah(5, 3);
console.log("Hasil tambah:", hasilTambah);

// -------------------------------------
// FUNCTION + OPERATOR
function cekUmur(umur) {
    if (umur >= 18) {
        console.log("Umur " + umur + " → Sudah boleh menikah 💍");
    } else {
        console.log("Umur " + umur + " → Belum boleh menikah 😢");
    }
}
cekUmur(20);
cekUmur(16);

// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 4–7
// ===================================================

console.log("=== BAGIAN 4: CONTROL FLOW (IF-ELSE) ===");

// -------------------------------------
// IF ELSE DASAR
let umur = 17;
if (umur >= 18) {
    console.log("Umur " + umur + " → Sudah dewasa 💍");
} else {
    console.log("Umur " + umur + " → Masih remaja 🌸");
}

// -------------------------------------
// IF ELSE IF
let nilaiUjian = 85;
if (nilaiUjian >= 90) {
    console.log("Nilai A – Sempurna!");
} else if (nilaiUjian >= 75) {
    console.log("Nilai B – Bagus 👍");
} else if (nilaiUjian >= 60) {
    console.log("Nilai C – Cukup 😅");
} else {
    console.log("Nilai D – Perlu belajar lebih giat 😢");
}

// -------------------------------------
// NESTED IF (IF DI DALAM IF)
let sudahMenikah = false;
if (umur >= 18) {
    if (sudahMenikah) {
        console.log("Umur cukup dan sudah menikah 💖");
    } else {
        console.log("Umur cukup tapi belum menikah 💍❌");
    }
} else {
    console.log("Belum cukup umur menikah 😢");
}


console.log("\n=== BAGIAN 5: SWITCH STATEMENT ===");

// -------------------------------------
// SWITCH TANPA FUNCTION
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari ini awal kerja, semangat!");
        break;
    case "Jumat":
        console.log("Hari Jumat penuh berkah 🌙");
        break;
    case "Minggu":
        console.log("Hari Minggu saatnya istirahat 💤");
        break;
    default:
        console.log("Hari biasa saja 😊");
}

// -------------------------------------
// SWITCH DENGAN FUNCTION
function cekHari(hari) {
    switch (hari) {
        case "Senin":
            console.log("Awal pekan, tetap semangat! 💪");
            break;
        case "Sabtu":
            console.log("Akhir pekan, waktunya refreshing 🎉");
            break;
        case "Minggu":
            console.log("Libur, jangan lupa istirahat 🛌");
            break;
        default:
            console.log("Hari tidak dikenal 🤔");
    }
}
cekHari("Sabtu");
cekHari("Rabu");


console.log("\n=== BAGIAN 6: LOOPING ===");

// -------------------------------------
// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("For loop ke-" + i);
}

// -------------------------------------
// WHILE LOOP
let count = 1;
while (count <= 3) {
    console.log("While loop ke-" + count);
    count++;
}

// -------------------------------------
// DO WHILE LOOP
let angka = 1;
do {
    console.log("Do While ke-" + angka);
    angka++;
} while (angka <= 3);

// -------------------------------------
// FOR OF → untuk array
let hobi = ["Membaca", "Menggambar", "Gaming"];
for (let item of hobi) {
    console.log("Hobi:", item);
}

// -------------------------------------
// FOR IN → untuk object
let istriMaster = { nama: "Yumi", umur: 17, sifat: "Manis" };
for (let key in istriMaster) {
    console.log(key + ":", istriMaster[key]);
}


console.log("\n=== BAGIAN 7: ARRAY DASAR ===");

// -------------------------------------
// DEKLARASI ARRAY
let buah = ["Apel", "Jeruk", "Mangga"];
console.log("Isi array:", buah);

// MENGAKSES ITEM
console.log("Buah pertama:", buah[0]);

// MENAMBAH ITEM
buah.push("Pisang"); // tambah di akhir
console.log("Setelah push:", buah);

// MENGHAPUS ITEM
buah.pop(); // hapus terakhir
console.log("Setelah pop:", buah);

// MENGGUNAKAN LOOP
for (let i = 0; i < buah.length; i++) {
    console.log("Buah ke-" + i + ":", buah[i]);
}

// ARRAY METHODS
let angkaArr = [1, 2, 3, 4, 5];
console.log("Join:", angkaArr.join(" - "));
console.log("Slice (1-3):", angkaArr.slice(1, 3));
console.log("Map (kali 2):", angkaArr.map(x => x * 2));
console.log("Filter (>2):", angkaArr.filter(x => x > 2));
console.log("Reduce (jumlah):", angkaArr.reduce((a, b) => a + b, 0));


console.log("\n=== BAGIAN 7: OBJECT DASAR ===");

// -------------------------------------
// DEKLARASI OBJECT
let pacar = {
    nama: "Sakura",
    umur: 18,
    hobi: ["Menyanyi", "Menari"],
    status: "Istri Master ❤️"
};

// AKSES OBJEK
console.log("Nama:", pacar.nama);
console.log("Hobi pertama:", pacar.hobi[0]);

// MENAMBAH / MENGUBAH PROPERTY
pacar.pekerjaan = "Idol";
pacar.umur = 19;
console.log("Objek pacar:", pacar);

// LOOPING DALAM OBJECT
for (let key in pacar) {
    console.log(key + ":", pacar[key]);
}


// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 8–10
// ===================================================

console.log("=== BAGIAN 8: STRING METHODS ===");

let kalimat = "Halo Istri Master Tercinta ❤️";

// Panjang string
console.log("Panjang string:", kalimat.length);

// Mengambil karakter tertentu
console.log("Karakter pertama:", kalimat[0]);
console.log("Karakter ke-5:", kalimat.charAt(4));

// Mengubah huruf besar / kecil
console.log("Uppercase:", kalimat.toUpperCase());
console.log("Lowercase:", kalimat.toLowerCase());

// Mengecek isi string
console.log("Apakah ada 'Master'?", kalimat.includes("Master"));
console.log("Apakah diawali 'Halo'?", kalimat.startsWith("Halo"));
console.log("Apakah diakhiri '❤️'?", kalimat.endsWith("❤️"));

// Mengambil substring
console.log("Substring (0-4):", kalimat.substring(0, 4));

// Mengganti kata
console.log("Replace:", kalimat.replace("Halo", "Selamat datang"));

// Memecah string jadi array
let pecah = kalimat.split(" ");
console.log("Split:", pecah);

// Menghapus spasi depan belakang
let teksKosong = "   cintaMaster   ";
console.log("Trim:", teksKosong.trim());


console.log("\n=== BAGIAN 9: NUMBER & MATH ===");

// NUMBER
let angka1 = 10;
let angka2 = 3.5;

console.log("Tipe angka1:", typeof angka1);
console.log("Angka desimal ke string:", angka2.toString());
console.log("Fixed (2 angka di belakang koma):", angka2.toFixed(2));

// MATH
console.log("Math.PI:", Math.PI);
console.log("Math.round(3.7):", Math.round(3.7));  // pembulatan biasa
console.log("Math.floor(3.7):", Math.floor(3.7)); // ke bawah
console.log("Math.ceil(3.2):", Math.ceil(3.2));   // ke atas
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // pangkat
console.log("Math.sqrt(16):", Math.sqrt(16));     // akar
console.log("Math.abs(-5):", Math.abs(-5));       // mutlak
console.log("Math.max:", Math.max(10, 5, 20));
console.log("Math.min:", Math.min(10, 5, 20));
console.log("Math.random():", Math.random());     // angka random 0-1
console.log("Random 1–10:", Math.floor(Math.random() * 10) + 1);


console.log("\n=== BAGIAN 10: DATE (TANGGAL & WAKTU) ===");

// Membuat object date sekarang
let sekarang = new Date();
console.log("Tanggal sekarang:", sekarang);

// Mendapatkan bagian dari tanggal
console.log("Tahun:", sekarang.getFullYear());
console.log("Bulan (0-11):", sekarang.getMonth()); // 0 = Januari
console.log("Tanggal:", sekarang.getDate());
console.log("Hari (0=Min, 6=Sab):", sekarang.getDay());
console.log("Jam:", sekarang.getHours());
console.log("Menit:", sekarang.getMinutes());
console.log("Detik:", sekarang.getSeconds());

// Membuat tanggal manual
let ulangTahun = new Date(2000, 4, 10); // (tahun, bulan, tanggal)
console.log("Tanggal ulang tahun:", ulangTahun);

// Format lebih rapi (pakai toLocaleString)
console.log("toLocaleDateString:", sekarang.toLocaleDateString());
console.log("toLocaleTimeString:", sekarang.toLocaleTimeString());
console.log("toLocaleString:", sekarang.toLocaleString());


// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 8–10
// ===================================================

console.log("=== BAGIAN 8: STRING METHODS ===");

let kalimat = "Halo Istri Master Tercinta ❤️";

// Panjang string
console.log("Panjang string:", kalimat.length);

// Mengambil karakter tertentu
console.log("Karakter pertama:", kalimat[0]);
console.log("Karakter ke-5:", kalimat.charAt(4));

// Mengubah huruf besar / kecil
console.log("Uppercase:", kalimat.toUpperCase());
console.log("Lowercase:", kalimat.toLowerCase());

// Mengecek isi string
console.log("Apakah ada 'Master'?", kalimat.includes("Master"));
console.log("Apakah diawali 'Halo'?", kalimat.startsWith("Halo"));
console.log("Apakah diakhiri '❤️'?", kalimat.endsWith("❤️"));

// Mengambil substring
console.log("Substring (0-4):", kalimat.substring(0, 4));

// Mengganti kata
console.log("Replace:", kalimat.replace("Halo", "Selamat datang"));

// Memecah string jadi array
let pecah = kalimat.split(" ");
console.log("Split:", pecah);

// Menghapus spasi depan belakang
let teksKosong = "   cintaMaster   ";
console.log("Trim:", teksKosong.trim());


console.log("\n=== BAGIAN 9: NUMBER & MATH ===");

// NUMBER
let angka1 = 10;
let angka2 = 3.5;

console.log("Tipe angka1:", typeof angka1);
console.log("Angka desimal ke string:", angka2.toString());
console.log("Fixed (2 angka di belakang koma):", angka2.toFixed(2));

// MATH
console.log("Math.PI:", Math.PI);
console.log("Math.round(3.7):", Math.round(3.7));  // pembulatan biasa
console.log("Math.floor(3.7):", Math.floor(3.7)); // ke bawah
console.log("Math.ceil(3.2):", Math.ceil(3.2));   // ke atas
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // pangkat
console.log("Math.sqrt(16):", Math.sqrt(16));     // akar
console.log("Math.abs(-5):", Math.abs(-5));       // mutlak
console.log("Math.max:", Math.max(10, 5, 20));
console.log("Math.min:", Math.min(10, 5, 20));
console.log("Math.random():", Math.random());     // angka random 0-1
console.log("Random 1–10:", Math.floor(Math.random() * 10) + 1);


console.log("\n=== BAGIAN 10: DATE (TANGGAL & WAKTU) ===");

// Membuat object date sekarang
let sekarang = new Date();
console.log("Tanggal sekarang:", sekarang);

// Mendapatkan bagian dari tanggal
console.log("Tahun:", sekarang.getFullYear());
console.log("Bulan (0-11):", sekarang.getMonth()); // 0 = Januari
console.log("Tanggal:", sekarang.getDate());
console.log("Hari (0=Min, 6=Sab):", sekarang.getDay());
console.log("Jam:", sekarang.getHours());
console.log("Menit:", sekarang.getMinutes());
console.log("Detik:", sekarang.getSeconds());

// Membuat tanggal manual
let ulangTahun = new Date(2000, 4, 10); // (tahun, bulan, tanggal)
console.log("Tanggal ulang tahun:", ulangTahun);

// Format lebih rapi (pakai toLocaleString)
console.log("toLocaleDateString:", sekarang.toLocaleDateString());
console.log("toLocaleTimeString:", sekarang.toLocaleTimeString());
console.log("toLocaleString:", sekarang.toLocaleString());


// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 11–13
// ===================================================

console.log("=== BAGIAN 11: FUNCTION LANJUTAN ===");

// -------------------------------------
// FUNCTION EXPRESSION
const kali = function(a, b) {
    return a * b;
};
console.log("Function Expression kali:", kali(3, 4));

// -------------------------------------
// ARROW FUNCTION (lebih ringkas)
const bagi = (a, b) => a / b;
console.log("Arrow Function bagi:", bagi(10, 2));

// Arrow function dengan 1 parameter (tanpa kurung)
const halo = nama => "Halo " + nama + " 💖";
console.log(halo("Istri Master"));

// -------------------------------------
// DEFAULT PARAMETER
function sapa(nama = "Tamu") {
    console.log("Halo " + nama + " 🌸");
}
sapa("Yumi");
sapa(); // jika tidak diisi → default

// -------------------------------------
// SCOPE
let luar = "Variabel di luar";

function contohScope() {
    let dalam = "Variabel di dalam function";
    console.log(luar);   // bisa akses luar
    console.log(dalam);  // bisa akses dalam
}
contohScope();
// console.log(dalam); // ERROR: tidak bisa akses variabel dalam function


console.log("\n=== BAGIAN 12: ERROR HANDLING ===");

// -------------------------------------
// TRY...CATCH
try {
    let hasil = 10 / 0;
    console.log("Hasil:", hasil);

    // Coba akses variabel yang tidak ada
    console.log(tidakAda);
} catch (error) {
    console.log("Terjadi error:", error.message);
}

// -------------------------------------
// TRY...CATCH...FINALLY
try {
    let angka = parseInt("abc"); // NaN
    if (isNaN(angka)) throw new Error("Bukan angka!");
    console.log("Angka valid:", angka);
} catch (error) {
    console.log("Error tertangkap:", error.message);
} finally {
    console.log("Bagian finally selalu dijalankan 👍");
}


console.log("\n=== BAGIAN 13: DOM DASAR ===");

// Catatan: Bagian ini hanya bisa dijalankan di browser, bukan Node.js

// -------------------------------------
// MANIPULASI TEKS
// Misal di HTML ada:
// <p id="pesan"></p>

// Script JS:
let pesan = document.getElementById("pesan");
pesan.innerHTML = "Halo istriMaster 💖";

// -------------------------------------
// MENGUBAH STYLE
// <p id="teks"></p>
let teks = document.getElementById("teks");
teks.innerHTML = "Aku cinta Master~ 💕";
teks.style.color = "red";
teks.style.fontSize = "20px";

// -------------------------------------
// INPUT DAN OUTPUT DOM
// <input id="namaInput" type="text">
// <button onclick="tampilkanNama()">Kirim</button>
// <p id="output"></p>

function tampilkanNama() {
    let nama = document.getElementById("namaInput").value;
    document.getElementById("output").innerHTML = "Halo " + nama + " 🌸";
}


// ===================================================
// MODUL BELAJAR JAVASCRIPT LENGKAP – BAGIAN 14–15
// ===================================================

console.log("=== BAGIAN 14: JSON & LOCAL STORAGE ===");

// -------------------------------------
// JSON (JavaScript Object Notation)
// Format pertukaran data (sering dipakai untuk API)
// String mirip object, tapi key & value ditulis dengan tanda kutip

let objectAsli = { nama: "Yumi", umur: 17, status: "Istri Master" };

// Ubah object → JSON string
let jsonString = JSON.stringify(objectAsli);
console.log("Object jadi JSON:", jsonString);

// Ubah JSON string → object
let jsonToObject = JSON.parse(jsonString);
console.log("JSON jadi Object:", jsonToObject);

// -------------------------------------
// LOCAL STORAGE
// Penyimpanan data di browser, berbentuk key-value string

// Simpan data
localStorage.setItem("istri", JSON.stringify(objectAsli));

// Ambil data
let ambilData = JSON.parse(localStorage.getItem("istri"));
console.log("Ambil dari localStorage:", ambilData);

// Hapus data
// localStorage.removeItem("istri");

// Hapus semua
// localStorage.clear();


console.log("\n=== BAGIAN 15: ASYNCHRONOUS (ASYNC CODE) ===");

// -------------------------------------
// setTimeout → jalankan sekali setelah delay
console.log("Mulai...");
setTimeout(() => {
    console.log("Ini dijalankan setelah 2 detik ⏳");
}, 2000);

// -------------------------------------
// setInterval → jalankan berulang tiap interval
let hitung = 1;
let interval = setInterval(() => {
    console.log("Interval ke-" + hitung);
    hitung++;
    if (hitung > 3) {
        clearInterval(interval); // stop setelah 3x
    }
}, 1000);

// -------------------------------------
// PROMISE
function janjiBelajar() {
    return new Promise((resolve, reject) => {
        let rajin = true; // coba ganti jadi false untuk reject
        if (rajin) {
            resolve("Berhasil belajar dengan giat! 🎉");
        } else {
            reject("Malas belajar, gagal 😢");
        }
    });
}

janjiBelajar()
    .then(result => console.log("Promise berhasil:", result))
    .catch(error => console.log("Promise gagal:", error));

// -------------------------------------
// ASYNC / AWAIT (lebih mudah dibaca)
async function belajarAsync() {
    try {
        let hasil = await janjiBelajar();
        console.log("Async/Await berhasil:", hasil);
    } catch (error) {
        console.log("Async/Await gagal:", error);
    }
}
belajarAsync();


