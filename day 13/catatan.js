export function hitung() {
    for(let i = 1; i <= 5; i++ ){
        for(let j = 1; j <= 5; j++){
            console.log(`${i} X ${j} ${i * j}`);
        }
        
    }
}


export function namaOrang(namaAwal,namaAkhir) {
    return(namaAwal + namaAkhir)
}

const angka = [5,2,4,5,1,8]

function barang(...things) {
    things.forEach(item => {
        console.log(`ini ${item}`);
        
    });
}
export {angka,barang}

/*
==========================
📚 CATATAN IMPORT & EXPORT
==========================

1. Apa itu Export?
   - Export adalah cara untuk "mengirim" atau "membagikan" variabel, fungsi, class,
     atau apapun dari satu file JS agar bisa digunakan di file JS lain.
   - Bisa dibayangkan seperti "menyediakan barang dagangan" agar bisa diimpor.

   Ada 2 jenis export:
   a. Named Export
   b. Default Export
*/

/* ======================
   🔹 Named Export
   ======================
   - Kita mengekspor banyak hal dengan nama tertentu.
   - Saat mengimpor, kita harus memanggil nama yang sama.
*/

// file: utils.js
export const PI = 3.14159;        // export variabel
export function tambah(a, b) {    // export fungsi
  return a + b;
}
export class Kalkulator {         // export class
  kali(a, b) {
    return a * b;
  }
}

/*
   📥 Cara mengimpor Named Export:
   - Wajib menggunakan kurung kurawal {}
   - Nama di dalam {} harus sesuai dengan yang di-export
*/

// file: main.js
import { PI, tambah, Kalkulator } from './utils.js';

console.log(PI);              // 3.14159
console.log(tambah(2, 3));    // 5
const k = new Kalkulator();
console.log(k.kali(4, 5));    // 20


/* ======================
   🔹 Default Export
   ======================
   - Hanya boleh ada SATU default export dalam 1 file.
   - Saat mengimpor, kita bebas memberi nama apapun.
*/

// file: hitung.js
export default function (angka) {
  return angka * 2;
}

// file: main.js
import dobelkan from './hitung.js';

console.log(dobelkan(7));   // 14

/*
   Perbedaan dengan Named Export:
   - Default export TIDAK butuh {} saat impor
   - Nama bebas (tidak harus sama dengan yang di-export)
*/


/* ======================
   🔹 Menggabungkan Export
   ======================
   - Dalam 1 file, bisa ada default export + named export sekaligus.
*/

// file: mathTools.js
export const E = 2.718;
export function bagi(a, b) {
  return a / b;
}
export default function kuadrat(x) {
  return x * x;
}

// file: main.js
import kuadrat, { E, bagi } from './mathTools.js';

console.log(E);          // 2.718
console.log(bagi(10, 2));// 5
console.log(kuadrat(4)); // 16


/* ======================
   🔹 Export All (Wildcard)
   ======================
   - Kita bisa mengimpor SEMUA named export dari satu file.
*/

// file: constants.js
export const API_URL = "https://api.example.com";
export const LIMIT = 100;

// file: main.js
import * as konstanta from './constants.js';

console.log(konstanta.API_URL); // "https://api.example.com"
console.log(konstanta.LIMIT);   // 100


/* ======================
   🔹 Re-export (Export ulang)
   ======================
   - Kadang kita ingin mengatur file agar lebih rapi.
   - Kita bisa me-reexport dari file lain.
*/

// file: utils.js
export function salam() { return "Halo!"; }

// file: index.js (re-export)
export { salam } from './utils.js';

// file: main.js
import { salam } from './index.js';
console.log(salam());  // "Halo!"


/* ======================
   🔹 Catatan Penting
   ======================
   1. Import & export HANYA bisa digunakan di module JS (pakai type="module" di HTML)
      <script type="module" src="main.js"></script>

   2. Path relatif harus pakai './' atau '../'
      contoh: import {...} from './utils.js';

   3. Default Export ➝ bebas nama saat impor
      Named Export ➝ wajib sama seperti yang diexport
*/

