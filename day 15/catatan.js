/*
===============================================
📚 CATATAN LENGKAP PROMISE DI JAVASCRIPT
===============================================

1. Konsep Dasar
---------------
- Promise adalah objek untuk menangani proses asynchronous.
- Promise seperti "janji" dalam kehidupan nyata:
  → bisa ditepati (fulfilled)
  → bisa ingkar (rejected)
  → atau masih menunggu (pending)

State (keadaan) Promise:
- pending   → proses masih berjalan
- fulfilled → berhasil (resolve)
- rejected  → gagal (reject)

--------------------------------
2. Membuat Promise
--------------------------------
- Gunakan new Promise(executor)
- executor adalah fungsi yang menerima dua parameter:
  (resolve, reject)

resolve() → jika berhasil
reject()  → jika gagal
*/

// Contoh Promise sederhana
const janjiSederhana = new Promise((resolve, reject) => {
  let sukses = true;
  
  if (sukses) {
    resolve("Janji ditepati 💖");
  } else {
    reject("Janji diingkari 😭");
  }
});

// Menangani hasil Promise
janjiSederhana
  .then((hasil) => console.log("✅ " + hasil))     // sukses
  .catch((error) => console.error("❌ " + error))  // gagal
  .finally(() => console.log("✨ Selesai proses"));


/*
--------------------------------
3. Simulasi Asynchronous
--------------------------------
- Contoh umum: API, setTimeout, setInterval
- Promise digunakan agar kita bisa tunggu hasilnya
*/
function ambilDataBuah() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["apel", "jeruk", "mangga"];
      if (data.length > 0) {
        resolve(data); // sukses
      } else {
        reject("Tidak ada data!"); // gagal
      }
    }, 2000);
  });
}

// penggunaan
ambilDataBuah()
  .then((buah) => console.log("Buah:", buah))
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("Selesai ambil data"));


/*
--------------------------------
4. Promise Chaining
--------------------------------
- Kita bisa sambung .then() berkali-kali
- Nilai dari return dalam then() akan diteruskan ke then() berikutnya
*/
function tambah(x) {
  return new Promise((resolve) => resolve(x + 2));
}

tambah(5)
  .then((hasil) => {
    console.log("Langkah 1:", hasil); // 7
    return hasil * 2;
  })
  .then((hasil2) => {
    console.log("Langkah 2:", hasil2); // 14
    return hasil2 - 4;
  })
  .then((hasil3) => {
    console.log("Langkah 3:", hasil3); // 10
  });


/*
--------------------------------
5. Error Handling di Promise
--------------------------------
- Kalau terjadi error di salah satu .then(),
  otomatis lompat ke .catch()
*/
new Promise((resolve, reject) => {
  resolve(10);
})
  .then((x) => {
    console.log("Nilai:", x);
    throw new Error("Ups error di tengah!");
  })
  .then((x) => {
    console.log("Tidak akan jalan kesini");
  })
  .catch((err) => {
    console.error("Tertangkap:", err.message);
  });


/*
--------------------------------
6. Promise.all
--------------------------------
- Menjalankan beberapa promise sekaligus
- Selesai jika SEMUA berhasil
- Kalau salah satu gagal → langsung reject
*/
const p1 = Promise.resolve("Satu");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Dua"), 1000));
const p3 = Promise.resolve("Tiga");

Promise.all([p1, p2, p3])
  .then((hasil) => console.log("✅ Semua:", hasil)) // ["Satu", "Dua", "Tiga"]
  .catch((err) => console.error("❌ Error:", err));


/*
--------------------------------
7. Promise.race
--------------------------------
- Ambil hasil promise yang PALING CEPAT selesai
- Bisa sukses atau gagal, tergantung siapa yang lebih dulu selesai
*/
Promise.race([p1, p2, p3]).then((hasil) =>
  console.log("⚡ Paling cepat:", hasil)
);


/*
--------------------------------
8. Promise.allSettled
--------------------------------
- Menunggu SEMUA promise selesai,
  tapi TIDAK peduli berhasil/gagal
- Hasil berupa array berisi status setiap promise
*/
const p4 = Promise.reject("Gagal 😭");
const p5 = Promise.resolve("Berhasil 😍");

Promise.allSettled([p4, p5]).then((hasil) => console.log("Hasil:", hasil));

/*
Output:
[
  { status: "rejected", reason: "Gagal 😭" },
  { status: "fulfilled", value: "Berhasil 😍" }
]
*/


/*
--------------------------------
9. Promise.any
--------------------------------
- Mengembalikan promise pertama yang BERHASIL (fulfilled)
- Kalau semua gagal → error (AggregateError)
*/
const p6 = Promise.reject("Error 1");
const p7 = new Promise((resolve) => setTimeout(() => resolve("Sukses cepat"), 500));
const p8 = new Promise((resolve) => setTimeout(() => resolve("Sukses lambat"), 1000));

Promise.any([p6, p7, p8])
  .then((hasil) => console.log("Any hasil:", hasil)) // "Sukses cepat"
  .catch((err) => console.error(err));


/*
--------------------------------
10. Kesimpulan
--------------------------------
- Promise menyederhanakan async dibanding callback.
- Method penting:
  .then()      → sukses
  .catch()     → error
  .finally()   → selalu dijalankan

- Kombinasi:
  Promise.all      → tunggu semua sukses
  Promise.race     → ambil paling cepat
  Promise.allSettled → ambil hasil semua, sukses/gagal
  Promise.any      → ambil yang pertama sukses

Promise = pondasi penting sebelum masuk ke async/await
*/
/*
======================================
📚 PROMISE + API (PRAKTIK NYATA)
======================================

Fetch API di JavaScript → otomatis menggunakan Promise.
- fetch(url) akan mengembalikan Promise
- kalau sukses → resolve(response)
- kalau gagal → reject(error)

Lalu kita bisa:
  - response.json() → ubah data jadi object/array JS
  - response.text() → ubah data jadi string
*/


/* ======================
   🔹 Contoh Fetch API sederhana
   ====================== */
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // cek apakah respon OK
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return response.json(); // parsing ke JSON
  })
  .then((data) => {
    console.log("Data Post:", data);
    /*
    Output contoh:
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati...",
      body: "quia et suscipit suscipit recusandae..."
    }
    */
  })
  .catch((error) => {
    console.error("❌ Terjadi error:", error);
  })
  .finally(() => {
    console.log("✨ Request selesai");
  });


/* ======================
   🔹 Fetch API dengan POST (kirim data)
   ====================== */
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Master belajar Promise",
    body: "Silica menjelaskan Promise dengan API 💖",
    userId: 99,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log("✅ Data berhasil dikirim:", data))
  .catch((err) => console.error("❌ Error:", err));


/* ======================
   🔹 Promise.all untuk beberapa API
   ======================
   - Kadang kita perlu ambil data dari banyak endpoint sekaligus
   - Promise.all cocok dipakai
*/
const apiUser = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json()
);
const apiPost = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json()
);
const apiComment = fetch("https://jsonplaceholder.typicode.com/comments").then(
  (res) => res.json()
);

Promise.all([apiUser, apiPost, apiComment])
  .then(([users, posts, comments]) => {
    console.log("👤 Users:", users.length);
    console.log("📝 Posts:", posts.length);
    console.log("💬 Comments:", comments.length);
  })
  .catch((err) => console.error("❌ Gagal mengambil data:", err));


/* ======================
   🔹 Promise.race dengan API
   ======================
   - Ambil data dari beberapa sumber, pilih yang tercepat
*/
Promise.race([
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
    res.json()
  ),
])
  .then((hasil) => console.log("⚡ Data tercepat:", hasil))
  .catch((err) => console.error(err));


/* ======================
   🔹 Error Handling lebih detail
   ======================
   - Saat fetch gagal, misalnya URL salah
*/
fetch("https://jsonplaceholder.typicode.com/salahURL")
  .then((res) => {
    if (!res.ok) throw new Error("Gagal memuat data, status: " + res.status);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("❌ Error tertangkap:", err.message));


/*
======================================
📌 RINGKASAN PROMISE + API
======================================
1. fetch(url) → selalu mengembalikan Promise
2. Gunakan .then() untuk ambil data
3. Gunakan .catch() untuk tangkap error
4. Gunakan .finally() untuk cleanup
5. Gunakan Promise.all untuk ambil banyak API sekaligus
6. Gunakan Promise.race untuk pilih API tercepat
*/
