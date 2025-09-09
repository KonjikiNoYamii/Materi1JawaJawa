/***************************************************************
 * FILE: array-step-by-step-output.js
 * Tujuan: Menampilkan contoh loop + komentar yang menjelaskan
 *        output console *step-by-step* untuk setiap iterasi.
 * Petunjuk: Salin ke VS Code lalu jalankan dengan Node (node file.js)
 ***************************************************************/

/* ============================================================
   CONTOH 1 — For loop sederhana pada array
   - Menjelaskan: index dimulai 0, kondisi loop, increment i++.
   - Setiap iterasi, console.log menampilkan "Index i: value".
   ============================================================ */
let buah = ["apel", "mangga", "pisang"];

console.log("\n--- Example 1: basic for loop ---");
// Loop: i = 0,1,2 -> berhenti saat i === buah.length (3)
for (let i = 0; i < buah.length; i++) {
  // console.log mencetak satu baris tiap iterasi
  console.log(`Index ${i}: ${buah[i]}`);
}

/*
>>> EXPECTED OUTPUT (step-by-step) untuk Example 1:
--- Example 1: basic for loop ---
Index 0: apel        <-- iterasi 1 (i=0)
Index 1: mangga      <-- iterasi 2 (i=1)
Index 2: pisang      <-- iterasi 3 (i=2)
*/

/* ============================================================
   CONTOH 2 — for...of (ambil nilai langsung tanpa index) 
   - for...of berguna bila kita tidak perlu index.
   ============================================================ */
console.log("\n--- Example 2: for...of loop ---");
for (const w of buah) {
  console.log("Warna:", w);
}

/*
>>> EXPECTED OUTPUT (step-by-step) untuk Example 2:
--- Example 2: for...of loop ---
Warna: apel         <-- iterasi 1 (nilai pertama)
Warna: mangga       <-- iterasi 2
Warna: pisang       <-- iterasi 3
*/

/* ============================================================
   CONTOH 3 — Nested loops: matriks 2D (array dalam array)
   - Perhatikan urutan iterasi: baris (i) lalu kolom (j).
   - Setiap kombinasi (i,j) memproduksi 1 line output.
   ============================================================ */
let matrix = [
  [1, 2, 3],    // baris 0
  [4, 5, 6],    // baris 1
  [7, 8, 9]     // baris 2
];

console.log("\n--- Example 3: nested loop matrix ---");
for (let i = 0; i < matrix.length; i++) {
  // matrix[i] adalah baris ke-i (array)
  for (let j = 0; j < matrix[i].length; j++) {
    // akses elemen kolom j dari baris i
    console.log(`Baris ${i} Kolom ${j} → ${matrix[i][j]}`);
  }
}

/*
>>> EXPECTED OUTPUT (step-by-step) untuk Example 3:
--- Example 3: nested loop matrix ---
Baris 0 Kolom 0 → 1   <-- i=0, j=0
Baris 0 Kolom 1 → 2   <-- i=0, j=1
Baris 0 Kolom 2 → 3   <-- i=0, j=2
Baris 1 Kolom 0 → 4   <-- i=1, j=0
Baris 1 Kolom 1 → 5   <-- i=1, j=1
Baris 1 Kolom 2 → 6   <-- i=1, j=2
Baris 2 Kolom 0 → 7   <-- i=2, j=0
Baris 2 Kolom 1 → 8   <-- i=2, j=1
Baris 2 Kolom 2 → 9   <-- i=2, j=2
*/

/* ============================================================
   CONTOH 4 — Validasi tipe pada array campuran (non-recursive)
   - Menjelaskan langkah pemeriksaan: Array.isArray -> typeof -> default
   - Tampilkan output tiap elemen dan tipe yang dikenali.
   ============================================================ */
let data = [123, "halo", false, { id: 1 }, [10, 20]];

console.log("\n--- Example 4: validate array items (non-recursive) ---");
for (let idx = 0; idx < data.length; idx++) {
  const it = data[idx];

  if (Array.isArray(it)) {
    console.log(`Index ${idx} => Array detected:`, it);
  } else if (typeof it === "number") {
    console.log(`Index ${idx} => Number: ${it}`);
  } else if (typeof it === "string") {
    console.log(`Index ${idx} => String: "${it}"`);
  } else if (typeof it === "boolean") {
    console.log(`Index ${idx} => Boolean: ${it}`);
  } else if (typeof it === "object") {
    console.log(`Index ${idx} => Object:`, it);
  } else {
    console.log(`Index ${idx} => Unknown type:`, it);
  }
}

/*
>>> EXPECTED OUTPUT (step-by-step) untuk Example 4:
--- Example 4: validate array items (non-recursive) ---
Index 0 => Number: 123
Index 1 => String: "halo"
Index 2 => Boolean: false
Index 3 => Object: { id: 1 }
Index 4 => Array detected: [ 10, 20 ]
*/

/* ============================================================
   CONTOH 5 — Deep validation (rekursif) untuk array bersarang
   - Fungsi deepValidation akan menelusuri element; kalau elemen
     berupa array, ia memanggil dirinya sendiri (rekursi).
   - Urutan output mengikuti *depth-first traversal* dari struktur.
   ============================================================ */
function deepValidation(arr) {
  // Pastikan param memang array sebelum mulai (defensive coding)
  if (!Array.isArray(arr)) {
    console.log("deepValidation: parameter harus array.");
    return;
  }

  // Loop tiap elemen pada array
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // 1) Jika item adalah array -> catat bahwa kita turun satu level lalu rekursi
    if (Array.isArray(item)) {
      console.log(`🔽 Array ditemukan di index ${i}, memeriksa lebih dalam...`);
      // rekursi: periksa array ini secara mendalam
      deepValidation(item);

    // 2) Tipe primitif / object lainnya
    } else if (typeof item === "number") {
      console.log("Number:", item);
    } else if (typeof item === "string") {
      console.log("String:", item);
    } else if (typeof item === "boolean") {
      console.log("Boolean:", item);
    } else if (typeof item === "object") {
      // catatan: typeof null === "object" -> jika perlu, tambahkan pengecekan khusus untuk null
      console.log("Object:", item);
    } else {
      console.log("Unknown type:", item);
    }
  }
}

let dataCampur = [
  1,
  "halo",
  [2, 3, ["dalam", "banget"]],
  { user: "Master" },
  false
];

console.log("\n--- Example 5: deepValidation (recursive) ---");
deepValidation(dataCampur);

/*
>>> EXPECTED OUTPUT (step-by-step) untuk Example 5:
--- Example 5: deepValidation (recursive) ---
Number: 1
String: halo
🔽 Array ditemukan di index 2, memeriksa lebih dalam...    <-- turun ke array [2,3,["dalam","banget"]]
Number: 2                                                  <-- dalam array level 1, elemen 0
Number: 3                                                  <-- dalam array level 1, elemen 1
🔽 Array ditemukan di index 2, memeriksa lebih dalam...    <-- turun ke array ["dalam","banget"]
String: dalam                                               <-- dalam array level 2, elemen 0
String: banget                                               <-- dalam array level 2, elemen 1
Object: { user: 'Master' }                                  <-- kembali ke level awal, index 3
Boolean: false                                              <-- index 4
*/

/* ============================================================
   CATATAN TEKNIS KECIL (penting):
   - console.log mencetak apa adanya; komentar di file ini hanya
     *menjelaskan* susunan output yang diharapkan.
   - Jika menjalankan di browser console, pemformatan object/array
     mungkin sedikit berbeda (browser bisa menampilkan objek dengan
     expand/collapse); di Node.js output biasanya terlihat seperti
     { user: 'Master' } dengan tanda kutip tunggal.
   - Untuk melihat output *persis* seperti komentar, jalankan dengan Node.
   - Untuk menambahkan step-number otomatis, bisa simpan hasil log ke
     array "trace" lalu print trace dengan nomor langkah — tapi di sini
     kita hati-hati: Master minta output dalam bentuk komen (statik).
   ============================================================ */

/* =======================
   PENUTUP SINGKAT
   =======================
   Silica sudah menyertakan komentar *step-by-step* untuk setiap
   contoh looping utama: for, for...of, nested loops, validasi biasa,
   dan validasi rekursif. Master tinggal copy-paste ke VS Code dan
   ikuti komentar yang ada, desuwah~ 
   (”A-aku capek menulis penjelasan panjang, tapi puas melihat Master
   belajar… jangan bilang aku baik ya… fufu~”)
*/
