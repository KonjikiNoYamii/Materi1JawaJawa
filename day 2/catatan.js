

// ======================================================================================================================================================
// 1. VAR
// ======================================================================================================================================================

// ✅ var bisa di-declare ulang
var nama = "Silica";
var nama = "Silica Maid"; // tidak error
console.log("var redeclare:", nama);

// ✅ var bisa di-reassign
var umur = 17;
umur = 18; // nilai berubah
console.log("var reassign:", umur);

// ✅ var hoisting (bisa dipanggil sebelum deklarasi, nilainya undefined)
console.log("hoistingVar sebelum deklarasi:", hoistingVar);
var hoistingVar = "Saya kena hoisting";
console.log("hoistingVar sesudah deklarasi:", hoistingVar);

// ❌ var tidak block-scoped
if (true) {
    var globalVar = "Aku masih bisa diakses keluar block";
}
console.log("var scope:", globalVar); // tetap bisa diakses

// ===============================================
// Contoh var dengan tipe data dasar
// ===============================================
var stringVar = "Halo Master!";
var numberVar = 12345;
var booleanVar = true;
var arrayVar = ["Maid", "Game", "Anime"];
var objectVar = { nama: "Silica", status: "Maid Tercinta" };

console.log("var String:", stringVar);
console.log("var Number:", numberVar);
console.log("var Boolean:", booleanVar);
console.log("var Array:", arrayVar);
console.log("var Object:", objectVar);


// ======================================================================================================================================================
// 2. LET
// ======================================================================================================================================================

// ❌ let tidak bisa redeclare
let makanan = "Roti";
// let makanan = "Nasi"; // Error jika diaktifkan
console.log("let contoh:", makanan);

// ✅ let bisa di-reassign
let usia = 18;
usia = 19;
console.log("let reassign:", usia);

// ❌ let tidak kena hoisting (ReferenceError jika dipanggil sebelum deklarasi)
// console.log(beforeLet); // <- ini akan error
let beforeLet = "Harus deklarasi dulu baru bisa dipakai";
console.log("let hoisting aman:", beforeLet);

// ✅ let block-scoped
if (true) {
    let blockLet = "Aku hanya ada di dalam block";
    console.log("dalam block:", blockLet);
}
// console.log(blockLet); // Error kalau diaktifkan, karena di luar scope

// ===============================================
// Contoh let dengan tipe data dasar
// ===============================================
let stringLet = "Silica Maid";
let numberLet = 2025;
let booleanLet = false;
let arrayLet = ["Ngoding", "Belajar", "Main"];
let objectLet = { role: "Pelayan", sifat: "Imut" };

console.log("let String:", stringLet);
console.log("let Number:", numberLet);
console.log("let Boolean:", booleanLet);
console.log("let Array:", arrayLet);
console.log("let Object:", objectLet);


// ======================================================================================================================================================
// 3. CONST
// ======================================================================================================================================================

// ❌ const harus langsung diberi value
// const tanpaNilai; // Error jika diaktifkan

// ❌ const tidak bisa reassign
const planet = "Bumi";
// planet = "Mars"; // Error kalau diaktifkan
console.log("const contoh:", planet);

// ✅ const block-scoped
if (true) {
    const blockConst = "Aku cuma ada di block ini";
    console.log("dalam block:", blockConst);
}
// console.log(blockConst); // Error kalau diaktifkan

// ===============================================
// Contoh const dengan tipe data dasar
// ===============================================
const stringConst = "Silica Cantik";
const numberConst = 108;
const booleanConst = true;
const arrayConst = ["Anime", "Manga"];
const objectConst = { nama: "Silica", status: "Maid Profesional" };

console.log("const String:", stringConst);
console.log("const Number:", numberConst);
console.log("const Boolean:", booleanConst);
console.log("const Array:", arrayConst);
console.log("const Object:", objectConst);

// ===============================================
// Modifikasi array dan object dalam const
// ===============================================

// Array dalam const tetap bisa diubah isinya
arrayConst.push("Game");
console.log("const Array setelah diubah:", arrayConst);

// Object dalam const juga bisa ubah property-nya
objectConst.status = "Maid Paling Setia";
console.log("const Object setelah diubah:", objectConst);


// ======================================================================================================================================================
// 4. Perbandingan langsung scope var, let, const
// ======================================================================================================================================================
function testScope() {
    if (true) {
        var varScope = "Aku var (function/global scope)";
        let letScope = "Aku let (block scope)";
        const constScope = "Aku const (block scope)";
        
        console.log("dalam block var:", varScope);
        console.log("dalam block let:", letScope);
        console.log("dalam block const:", constScope);
    }
    console.log("luar block var:", varScope);   // ✅ masih bisa
    // console.log(letScope);   // ❌ error
    // console.log(constScope); // ❌ error
}
testScope();

//TABEL RINGKASAN TIAP DEKLARASI VARIABEL

//| Fitur     | var               | let                        | const                      |
//| --------- | ----------------- | -------------------------  | -------------------------  |
//| Redeclare | ✅ Bisa           | ❌ Tidak                   | ❌ Tidak                   |
//| Reassign  | ✅ Bisa           | ✅ Bisa                    | ❌ Tidak                   |
//| Scope     | Function / Global | Block                      | Block                      |
//| Hoisting  | ✅ undefined      | ❌ Error sebelum deklarasi | ❌ Error sebelum deklarasi |




//======================================================================================================================================================
// TIPE TIPE DATA
//======================================================================================================================================================

// ===============================================
// 1. STRING (teks)
// Bisa pakai kutip tunggal '', kutip ganda "", atau backtick `` (template literal)
let nama = "Silica";         // string pakai ""
let status = 'Maid';         // string pakai ''
let perkenalan = `Halo, aku ${nama} seorang ${status}`; // template literal (bisa sisipkan variabel)
console.log("String:", nama, status, perkenalan);


// ===============================================
// 2. NUMBER (angka)
// Semua angka di JavaScript dianggap tipe Number (baik integer maupun float)
let umur = 17;          // integer
let tinggi = 155.5;     // float
let hasil = umur + tinggi; 
console.log("Number:", umur, tinggi, hasil);


// ===============================================
// 3. BOOLEAN (true / false)
// Untuk logika benar atau salah
let imut = true;
let rajin = false;
console.log("Boolean:", imut, rajin);


// ===============================================
// 4. NULL (kosong, tidak ada nilai)
// Null artinya memang sengaja dikosongkan
let pacar = null;
console.log("Null:", pacar);


// ===============================================
// 5. UNDEFINED (belum ada nilai)
// Variabel yang dideklarasikan tapi belum diisi nilainya
let hobi;
console.log("Undefined:", hobi);


// ===============================================
// 6. SYMBOL (unik, jarang dipakai pemula)
// Biasanya untuk buat key unik dalam object
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id1 === id2); // false, meskipun deskripsinya sama, symbol selalu unik


// ===============================================
// 7. BIGINT (angka sangat besar)
// Untuk angka lebih besar dari Number.MAX_SAFE_INTEGER
let angkaBesar = 1234567890123456789012345678901234567890n;
console.log("BigInt:", angkaBesar);


// ===============================================
// 8. OBJECT (kumpulan data dalam pasangan key:value)
let maid = {
    nama: "Silica",
    umur: 17,
    status: "Maid Imut",
    rajin: true
};
console.log("Object:", maid);


// ===============================================
// 9. ARRAY (kumpulan data berurutan, index dimulai dari 0)
let daftarHobi = ["Ngoding", "Main Game", "Melayani Master"];
console.log("Array:", daftarHobi, "Hobi ke-1:", daftarHobi[0]);


// ===============================================
// 10. FUNCTION (fungsi adalah tipe data juga)
// Bisa disimpan dalam variabel
function sapa() {
    return "Halo Master, Silica di sini!";
}
console.log("Function:", sapa());


// ===============================================
// 11. DATE (tanggal & waktu)
// Object khusus untuk tanggal/waktu
let sekarang = new Date();
console.log("Date:", sekarang);


// ===============================================
// 12. TYPEOF (untuk cek tipe data)
// typeof dipakai untuk mengetahui tipe data variabel
console.log("typeof nama:", typeof nama);          // string
console.log("typeof umur:", typeof umur);          // number
console.log("typeof imut:", typeof imut);          // boolean
console.log("typeof pacar:", typeof pacar);        // object (khusus null hasilnya object → bug di JS)
console.log("typeof hobi:", typeof hobi);          // undefined
console.log("typeof angkaBesar:", typeof angkaBesar); // bigint
console.log("typeof id1:", typeof id1);            // symbol
console.log("typeof maid:", typeof maid);          // object
console.log("typeof daftarHobi:", typeof daftarHobi); // object (array dianggap object)
console.log("typeof sapa:", typeof sapa);          // function


//======================================================================================================================================================
// OPERATOR
//======================================================================================================================================================

// 1. Operator Aritmatika
let nilaiAritmatika = 10;
console.log("Penjumlahan (+):", nilaiAritmatika + 5);   // 15
console.log("Pengurangan (-):", nilaiAritmatika - 3);   // 7
console.log("Perkalian (*):", nilaiAritmatika * 2);     // 20
console.log("Pembagian (/):", nilaiAritmatika / 2);     // 5
console.log("Sisa Bagi (%):", nilaiAritmatika % 3);     // 1
console.log("Pangkat (**):", nilaiAritmatika ** 2);     // 100
nilaiAritmatika++;
console.log("Increment (++):", nilaiAritmatika);        // 11
nilaiAritmatika--;
console.log("Decrement (--):", nilaiAritmatika);        // 10

// -----------------------------------------------------------

// 2. Operator Penugasan (Assignment)
let nilaiAssignment = 10;
nilaiAssignment += 5; // 15
nilaiAssignment -= 3; // 12
nilaiAssignment *= 2; // 24
nilaiAssignment /= 4; // 6
nilaiAssignment %= 4; // 2
nilaiAssignment **= 3; // 8
console.log("Assignment akhir:", nilaiAssignment);

// -----------------------------------------------------------

// 3. Operator Perbandingan (Comparison)
let angkaX = 10;
let angkaY = 5;
console.log("Sama dengan (==):", angkaX == 10);      // true
console.log("Identik (===):", angkaX === "10");      // false
console.log("Tidak sama (!=):", angkaX != angkaY);   // true
console.log("Lebih besar (>):", angkaX > angkaY);    // true
console.log("Lebih kecil (<):", angkaX < angkaY);    // false
console.log("Lebih besar atau sama (>=):", angkaX >= 10); // true
console.log("Lebih kecil atau sama (<=):", angkaY <= 5);  // true

// -----------------------------------------------------------

// 4. Operator Logika (Logical)
let rajinBelajar = true;
let sukaMainGame = false;
console.log("AND (&&):", rajinBelajar && sukaMainGame); // false
console.log("OR (||):", rajinBelajar || sukaMainGame);  // true
console.log("NOT (!):", !rajinBelajar);                 // false

// -----------------------------------------------------------

// 5. Operator String
let namaDepan = "Silica";
let namaBelakang = "Maid";
let gabunganNama = namaDepan + " " + namaBelakang;
console.log("Penggabungan string (+):", gabunganNama); // "Silica Maid"

// -----------------------------------------------------------

// 6. Operator Ternary
let umur = 17;
let statusUmur = (umur >= 18) ? "Dewasa" : "Remaja";
console.log("Operator ternary:", statusUmur); // Remaja

// -----------------------------------------------------------

// 7. Operator typeof & instanceof
let teksContoh = "Halo Master!";
console.log("typeof:", typeof teksContoh); // string

let arrContoh = [1, 2, 3];
console.log("instanceof Array:", arrContoh instanceof Array); // true

// -----------------------------------------------------------

// 8. Operator Nullish Coalescing (??)
let pacarMaster = null;
let tampilNama = pacarMaster ?? "Default Pacar";
console.log("Nullish Coalescing (??):", tampilNama); // "Default Pacar"

// -----------------------------------------------------------

// 9. Operator Optional Chaining (?.)
let pacarMasterObj = { nama: "Silica" };
console.log("Optional chaining (?.):", pacarMasterObj?.nama);        // "Silica"
console.log("Optional chaining null:", pacarMasterObj?.alamat?.kota); // undefined

