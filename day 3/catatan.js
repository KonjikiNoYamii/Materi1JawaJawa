// ===================================================
// BAGIAN 1: FUNCTION + OPERATOR
// ===================================================
console.log("=== BAGIAN 1: FUNCTION + OPERATOR ===");

// Fungsi sederhana dengan operator aritmatika
function tambah(x, y) {
    let hasil = x + y;
    console.log("Hasil penjumlahan: " + x + " + " + y + " = " + hasil);
}

function kali(x, y) {
    let hasil = x * y;
    console.log("Hasil perkalian: " + x + " * " + y + " = " + hasil);
}

function bandingkan(x, y) {
    // Operator perbandingan
    if (x > y) {
        console.log(x + " lebih besar dari " + y);
    } else if (x < y) {
        console.log(x + " lebih kecil dari " + y);
    } else {
        console.log(x + " sama dengan " + y);
    }
}

function logikaContoh(a, b) {
    // Operator logika
    if (a && b) {
        console.log("Kedua kondisi benar (true && true)");
    }
    if (a || b) {
        console.log("Salah satu kondisi benar (true || false)");
    }
    if (!a) {
        console.log("Nilai a adalah false (dibalik dengan !)");
    }
}

// Jalankan contoh
tambah(10, 5);
kali(3, 4);
bandingkan(7, 9);
logikaContoh(true, false);


// ===================================================
// BAGIAN 2: IF ELSE + OPERATOR (Deskriptif)
// ===================================================
console.log("\n=== BAGIAN 2: IF ELSE + OPERATOR ===");

// 1. If tunggal
let nilaiUjian = 85;
if (nilaiUjian >= 75) {
    console.log("Selamat! Nilai ujian " + nilaiUjian + " → LULUS ✅");
}

// 2. If-Else
let umur = 17;
if (umur >= 18) {
    console.log("Umur " + umur + " → Sudah cukup umur untuk membuat SIM 🚗");
} else {
    console.log("Umur " + umur + " → Belum cukup umur ❌");
}

// 3. If-Else If-Else
let skor = 65;
if (skor >= 90) {
    console.log("Skor " + skor + " → Grade A 🏆");
} else if (skor >= 75) {
    console.log("Skor " + skor + " → Grade B 👍");
} else if (skor >= 60) {
    console.log("Skor " + skor + " → Grade C ⚠️");
} else {
    console.log("Skor " + skor + " → Grade D ❌");
}

// 4. If dengan operator logika
let angka1 = 7;
let angka2 = 12;

if (angka1 > 0 && angka2 > 0) {
    console.log("Kedua angka positif (" + angka1 + " dan " + angka2 + ")");
}

if (angka1 % 2 === 0 || angka2 % 2 === 0) {
    console.log("Salah satu dari " + angka1 + " atau " + angka2 + " adalah genap");
}

if (!(angka1 > angka2)) {
    console.log("Benar → angka1 (" + angka1 + ") tidak lebih besar dari angka2 (" + angka2 + ")");
}

// 5. Nested If
let login = true;
let role = "admin";

if (login) {
    console.log("Login berhasil ✅");

    if (role === "admin") {
        console.log("Selamat datang, Admin 👑");
    } else {
        console.log("Selamat datang, User biasa 🙋");
    }
} else {
    console.log("Login gagal ❌");
}

// 6. If dengan Ternary Operator
let angka3 = 10;
let hasilTernary = (angka3 % 2 === 0) ? "Genap" : "Ganjil";
console.log("Angka " + angka3 + " adalah " + hasilTernary);

let umurBioskop = 15;
let izinMasuk = (umurBioskop >= 18) ? "Boleh nonton film dewasa 🎬" : "Dilarang masuk 🚫";
console.log("Umur " + umurBioskop + " tahun → " + izinMasuk);


// ===================================================
// BAGIAN 3: SWITCH
// ===================================================
console.log("\n=== BAGIAN 3: SWITCH ===");

// -------------------------------------
// 1. Switch tanpa function
// -------------------------------------
let hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari ini Senin → Awal minggu 💪");
        break;
    case "Rabu":
        console.log("Hari ini Rabu → Tengah minggu 📅");
        break;
    case "Jumat":
        console.log("Hari ini Jumat → Hampir weekend 🎉");
        break;
    default:
        console.log("Hari " + hari + " tidak ada dalam daftar.");
}

// -------------------------------------
// 2. Switch dengan function
// -------------------------------------
function cekHari(hariInput) {
    switch (hariInput) {
        case "Senin":
            console.log("Hari ini Senin → Awal minggu 💪");
            break;
        case "Rabu":
            console.log("Hari ini Rabu → Tengah minggu 📅");
            break;
        case "Jumat":
            console.log("Hari ini Jumat → Hampir weekend 🎉");
            break;
        default:
            console.log("Hari " + hariInput + " tidak ada dalam daftar.");
    }
}

// Jalankan function switch
cekHari("Rabu");
cekHari("Minggu");
