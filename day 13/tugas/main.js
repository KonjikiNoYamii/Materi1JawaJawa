import hitungTotal,{duit} from "./kasir.js";
import { ambilJurusan,ambilNIM,ambilNama, mahasiswa} from "./mahasiswa.js";
import hitungTotalPoin,{ poinGame,POIN_MAKSIMAL,POIN_BONUS} from "./game.js";
import { namaKontak,nomorKontak,pisah as pisahNamaKontak,gabung as gabungNamaKontak } from "./kontak.js";
import buku from "./buku.js";
import { cariProduk,produk } from "./toko/index.js";
import { brightness,scale,sizeFoto } from "./foto/index.js";
import {jadwalHariIni,bookingLapangan,booking} from './lapangan/booking.js'
import { total,uang } from "./kasir/index.js";
import { ppn } from "./kasir/index1.js";
import { promo } from "./kasir/index2.js";
import { kembali } from "./kasir/index3.js";

console.log(hitungTotal(duit));

console.log(ambilNama(mahasiswa));
console.log(ambilNIM(mahasiswa));
console.log(ambilJurusan(mahasiswa));

console.log(hitungTotalPoin(...poinGame));
console.log(POIN_MAKSIMAL);
console.log(POIN_BONUS);
console.log(pisahNamaKontak(namaKontak));
console.log(gabungNamaKontak(`${namaKontak},${nomorKontak}`));
buku.hitungJumlah();
buku.cariBuku("Habis gelap terbitlah terang");
buku.bukuTebal("Ayat-ayat kiri");
console.log(cariProduk(produk, "laptop"));

const editFoto =[
    {nama: "foto"},
    {nama: "foto1"},
    {nama: "foto2"}
]
const hasilEdit = editFoto.map(item =>{
    let hasil = brightness(item)
    hasil = sizeFoto(hasil)
    hasil = scale(hasil)
    return hasil
}
)         
console.log(hasilEdit);

console.log(booking(jadwalHariIni,bookingLapangan));

console.log(total());
console.log(ppn(total()));
console.log(promo(total()));
console.log(kembali(uang,total()));

// main.js
import buatSiswa, { haloSiswa } from './platform/siswa.js';
import { buatKursus, enrollSiswa } from './platform/kursus.js';
import reportNilai, { beriNilai } from './platform/nilai.js';

// 1. Daftar siswa
let siswa = buatSiswa("Budi");
console.log(haloSiswa(siswa));

// 2. Buat kursus
const js = buatKursus("JavaScript");
const html = buatKursus("HTML");

// 3. Enroll ke kursus
siswa = enrollSiswa(siswa, js);
siswa = enrollSiswa(siswa, html);

// 4. Tambah nilai
siswa = beriNilai(siswa, js, 85);
siswa = beriNilai(siswa, html, 90);

// 5. Report
console.log(reportNilai(siswa));
