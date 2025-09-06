/***************************************************************
 * PANDUAN RINCI: Kenapa menggunakan operator tertentu di loop?
 * - Semua penjelasan ada di komentar baris/blok.
 * - Contoh disusun dari mudah → medium → kompleks.
 * - Fokus pada: header for (init; condition; increment),
 *   operator dalam body (+=, -=, %, ===, ||, &&, splice, etc),
 *   dan pola khusus (reverse loop untuk splice, caching length, step i += n).
 ***************************************************************/

/***************************************************************
 * CONTOH 1 — MUDAH: Menjumlahkan angka dalam array
 * Tujuan: jelaskan setiap operator/ekspresi di header & body
 ***************************************************************/
{
  // data contoh
  const angka = [1, 2, 3, 4, 5]

  // total sebagai accumulator (menyimpan hasil bertahap)
  let total = 0

  // Penjelasan header for:
  // - "let i = 0" -> inisialisasi index. Kita mulai dari 0 karena array JS 0-based.
  // - "i < angka.length" -> condition. Kita gunakan "<" (bukan "<=") karena
  //    valid index terakhir = angka.length - 1. Jika memakai "<=", akan membaca
  //    index = angka.length yang undefined. Jadi memakai "<" mencegah out-of-range.
  // - "i++" -> increment post-increment. Di header for, i++ dan ++i sama efeknya
  //    karena nilai hasil increment tidak digunakan langsung dalam ekspresi lain.
  for (let i = 0; i < angka.length; i++) {
    // "total += angka[i]" -> operator += menambahkan angka[i] ke accumulator.
    // Digunakan untuk menyingkat "total = total + angka[i]" dan membuat maksud jelas.
    total += angka[i]
    // Mengapa tidak pakai total = angka[i] ? Karena kita ingin akumulasi.
  }

  console.log("CONTOH 1 - total:", total) // 15

  // ---- Optimasi: caching length ----
  // Beberapa programmer menulis: for (let i = 0, len = angka.length; i < len; i++) { ... }
  // Alasan:
  // - angka.length adalah properti yang dibaca tiap iterasi; pada mesin modern ini cepat,
  //   namun pada kode sangat sering/loop besar, menyimpan angka.length ke variabel (len)
  //   menghindari pembacaan properti berulang dan sedikit mempercepat loop.
  // - Gunakan caching ketika performance menjadi perhatian (data besar atau loop berat).
  let total2 = 0
  for (let i = 0, len = angka.length; i < len; i++) {
    total2 += angka[i]
  }
  console.log("CONTOH 1 - total2 (dengan caching length):", total2)
}

/***************************************************************
 * CONTOH 2 — MEDIUM: Menghapus elemen dari array saat looping
 * (menggunakan splice) — kenapa harus loop terbalik (reverse)?
 ***************************************************************/
{
  // Misal kita ingin menghapus semua angka genap dari array.
  let arr = [1, 2, 3, 4, 5, 6]

  // Salah (loop maju) -> contoh masalah:
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     arr.splice(i, 1)
  //   }
  // }
  // Masalahnya: splice mengubah panjang array & memindahkan elemen di kanan ke kiri.
  // Ketika kita menghapus arr[1], elemen yang tadinya di index 2 berpindah ke index 1,
  // namun loop selanjutnya i++ membuat kita melompati elemen baru di index 1.
  // Jadi beberapa elemen bisa kedapatan atau terlewat.

  // Solusi: loop terbalik
  // - "let i = arr.length - 1" -> mulai dari index terakhir.
  // - "i >= 0" -> berhenti ketika i sampai 0 (termasuk 0).
  // - "i--" -> decrement. Kita mengurangi index karena kita bergerak dari kanan ke kiri.
  for (let i = arr.length - 1; i >= 0; i--) {
    // Operator modulus "%" -> cek sisa bagi 2. Jika 0, berarti genap.
    if (arr[i] % 2 === 0) {
      // splice(index, count) -> hapus 1 elemen di posisi i.
      // Kenapa aman di loop terbalik? Karena penghapusan hanya mempengaruhi indeks < i,
      // yang sudah kita proses, sehingga indeks yang akan datang tidak berubah.
      arr.splice(i, 1)
    }
  }

  console.log("CONTOH 2 - arr setelah hapus genap (loop terbalik):", arr) // [1,3,5]
}

/***************************************************************
 * CONTOH 3 — MEDIUM: Step / skipping (i += 2) untuk efisiensi
 * Gunakan ketika ingin iterasi setiap nth element (mis. setiap 2)
 ***************************************************************/
{
  // Contoh: jumlahkan angka pada index ganjil saja (1,3,5,...)
  const nums = [10, 20, 30, 40, 50, 60]
  let totalGanjilIndex = 0

  // Mulai dari 1 agar index ganjil, lalu lompat 2 langkah setiap iterasi.
  // - "i += 2" mengurangi jumlah iterasi hampir setengahnya.
  // - Cocok bila kita yakin pola indeks tetap (tidak sedang menghapus/menyisip).
  for (let i = 1; i < nums.length; i += 2) {
    totalGanjilIndex += nums[i]
  }

  console.log("CONTOH 3 - total index ganjil:", totalGanjilIndex) // 20 + 40 + 60 = 120

  // Catatan: jika kondisi loop atau isi loop mengubah array (splice/push), jangan gunakan step
  // kecuali Anda mengerti implikasinya—karena indeks yang dilompati bisa bergeser.
}

/***************************************************************
 * CONTOH 4 — PENJELASAN ++i vs i++ (pre-increment vs post-increment)
 * Kenali perbedaan ketika nilai increment digunakan dalam ekspresi.
 ***************************************************************/
{
  // Post-increment (i++) -> gunakan nilai lama untuk ekspresi, lalu increment.
  let a = 0
  console.log("CONTOH 4 - a (sebelum i++):", a)      // 0
  console.log("CONTOH 4 - result i++:", a++)        // mencetak 0, setelah itu a jadi 1
  console.log("CONTOH 4 - a (setelah i++):", a)     // 1

  // Pre-increment (++i) -> increment dulu, lalu gunakan nilai baru untuk ekspresi.
  let b = 0
  console.log("CONTOH 4 - result ++b:", ++b)        // mencetak 1, b jadi 1

  // Di header for(...; ...; i++) vs i++: biasanya tidak ada perbedaan
  // karena hasil increment tidak dipergunakan oleh ekspresi lain. Jadi prefer readability.
}

/***************************************************************
 * CONTOH 5 — NESTED LOOPS: 2D Array (matrix) — alasan operator di header
 * - i < matrix.length : iterasi baris
 * - j < matrix[i].length : iterasi kolom di baris i (baris bisa tidak sama panjang)
 ***************************************************************/
{
  const matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ]

  // Perhatikan: setiap baris memiliki panjang berbeda → jangan cache matrix[0].length !
  // Gunakan matrix[i].length pada kondisi inner loop agar aman untuk setiap baris.
  for (let i = 0; i < matrix.length; i++) {
    // Kita juga bisa cache panjang baris untuk sedikit optimasi:
    const rowLen = matrix[i].length
    for (let j = 0; j < rowLen; j++) {
      // Gunakan "<" karena valid index terakhir = rowLen - 1.
      // Tidak memakai "<=" untuk menghindari akses out-of-range.
      // j++ cukup karena kita ingin maju satu per satu kolom.
      // Operasi di sini misalnya cetak pasangan indeks & nilainya.
      // (Saya sengaja tidak menggunakan destructuring agar jelas hubungan index↔value)
      // Contoh penggunaan operator: matrix[i][j] untuk akses element.
      // Complexity: setiap kombinasi baris x kolom dieksekusi → O(n*m)
      // Hindari nested loop berat bila data besar (pertimbangkan algoritma lain).
      // Biasanya j < matrix[i].length dipilih karena baris variable length.
      // Jika baris selalu sama panjang, caching rowLen bisa sedikit mempercepat.
      // Jika loop body memanggil fungsi mahal, pertimbangkan optimasi di sana.
      // (Penjelasan lengkap ini supaya Master paham kenapa kondisi ditulis seperti itu)
      // console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

/***************************************************************
 * CONTOH 6 — KOMPLEKS: Memproses array of objects (summary & dedup)
 * — tunjukkan alasan operator: penggunaan bracket notation, "in" / === undefined,
 *   dan operator logika untuk inisialisasi (||).
 ***************************************************************/
{
  // Misal input transaksi: array objek { product, qty, price }
  const transaksi = [
    { product: "A", qty: 2, price: 100 },
    { product: "B", qty: 1, price: 150 },
    { product: "A", qty: 3, price: 100 },
    { product: "C", qty: 5, price: 50 }
  ]

  // Kita ingin: total revenue per produk (menjadikan objek sebagai map)
  const revenueByProduct = {} // object kosong untuk menampung hasil

  // Kita pakai loop index-based untuk contoh: for (let i = 0; i < transaksi.length; i++)
  // Alasan index-based: kadang kita perlu index untuk logging, atau mutasi item, atau akses sibling.
  for (let i = 0; i < transaksi.length; i++) {
    // Ambil item sekarang
    const item = transaksi[i]

    // Gunakan bracket notation revenueByProduct[item.product]
    // karena key (nama produk) disimpan di variable .product.
    // Dot-notation (revenueByProduct.item.product) tidak mungkin karena nama properti dinamis.
    const key = item.product

    // Jika revenueByProduct[key] belum ada, maka inisialisasi ke 0.
    // Pilihan pengecekan:
    // - revenueByProduct[key] === undefined   -> aman, karena jika value 0 dianggap set.
    // - if (!(key in revenueByProduct))       -> alternatif menggunakan "in" operator.
    if (revenueByProduct[key] === undefined) {
      revenueByProduct[key] = 0
    }

    // Operator "+=" untuk akumulasi: tambah hasil penjualan (qty * price)
    // Mengapa pakai qty * price, bukan parseInt? Karena asumsi data sudah jumlah & harga numeric.
    revenueByProduct[key] += item.qty * item.price
    // Penjelasan: menggunakan "+=" memperjelas maksud "tambahkan ke total sebelumnya".
  }

  console.log("CONTOH 6 - revenueByProduct:", revenueByProduct)
  // Output: { A: 500, B: 150, C: 250 }
  // (A: 2*100 + 3*100 = 500)

  // --- Versi alternatif ringkas (menggunakan logical nullish coalescing / OR) ---
  // Beberapa orang menulis:
  // revenueByProduct[key] = (revenueByProduct[key] || 0) + item.qty * item.price
  // Penjelasan:
  // - "|| 0" mengisi default 0 ketika revenueByProduct[key] falsy.
  // - Namun hati-hati: jika revenueByProduct[key] pernah bernilai 0 (falsy), OR akan
  //    menggantinya juga jadi 0 (masih oke untuk akumulasi), tapi jika allowed value falsy lain,
  //    pertimbangkan nullish coalescing "??" (lebih tepat untuk null/undefined).
  // Contoh lebih aman:
  // revenueByProduct[key] = (revenueByProduct[key] ?? 0) + item.qty * item.price
  // "??" hanya menggantikan jika left side null/undefined, tidak menggantikan 0.
}

/***************************************************************
 * TIPS RINGKAS & RULES OF THUMB (kenapa pakai operator begitu)
 *
 * 1) Gunakan "i = 0; i < arr.length; i++" ketika ingin akses indeks dari kiri ke kanan.
 *    - "<" bukan "<=" untuk mencegah akses di luar index.
 *
 * 2) Gunakan "i = arr.length - 1; i >= 0; i--" saat melakukan splice/hapus elemen
 *    di dalam loop agar penggeseran indeks tidak menyebabkan elemen tertinggal.
 *
 * 3) Gunakan "i += n" untuk lompat (step) — efisien bila pola indeks tetap.
 *
 * 4) Cache length (let len = arr.length) bila loop sangat besar & performa diperhatikan.
 *
 * 5) Gunakan "===" (strict equality) untuk menghindari konversi tipe yang tidak diinginkan.
 *
 * 6) Gunakan bracket notation obj[key] bila key dinamis. Gunakan dot notation bila key literal.
 *
 * 7) Gunakan "continue" untuk skip cepat elemen yang tidak perlu diproses; gunakan "break"
 *    untuk keluar total dari loop saat kondisi terpenuhi.
 *
 * 8) Pilih for...of bila:
 *    - Tidak perlu index.
 *    - Ingin kode lebih bersih/readable.
 *    Pilih for (i=0; ...) bila:
 *    - Perlu index untuk operasi (splice, referensi sibling item, logging index, dsb).
 *
 * 9) Sedikit optimasi: hindari panggilan fungsi mahal di kondisi loop (mis. arr.length jika tidak di-cache).
 *
 * 10) Pre-increment vs post-increment: hati-hati saat hasil increment dipakai dlm ekspresi;
 *     di header for, perbedaan praktis biasanya tidak signifikan.
 *
 ***************************************************************/
