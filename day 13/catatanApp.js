import * as a from './catatan.js' // * untuk mengambil semua yang di export dalam 1 file
                                    // as sebagai alias 
a.barang(...a.angka) // alias harus dipanggil dahulu sebelum nama export nya layaknya memanggil object

import { namaHorang } from './catatanTransit.js' // mengambil dari transit
console.log(namaHorang("Zidan"," Albani")); //namaOrang yg sudah dirubah menjadi namaHorang dipanggil

import { perkalian } from './catatanTransit.js';
perkalian()