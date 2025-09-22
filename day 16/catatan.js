/*
===================================
📚 CATATAN ASYNC & AWAIT
===================================

1. Apa itu async/await?
   - Cara modern & lebih rapi untuk menangani Promise
   - async → dipakai pada deklarasi fungsi
     Fungsi async SELALU mengembalikan Promise
   - await → dipakai di dalam async function
     Digunakan untuk "menunggu" hasil Promise sebelum lanjut
   - Dengan async/await, kode terlihat seperti sinkron,
     padahal berjalan asinkron.

   ⚠️ await hanya bisa dipakai di dalam fungsi async!
*/


/* ======================
   🔹 Dasar penggunaan
   ====================== */
function janjiCepat() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Janji ditepati"), 1000);
  });
}

async function contohAsync() {
  console.log("Mulai...");
  const hasil = await janjiCepat(); // tunggu hasil promise
  console.log("Hasil:", hasil);
  console.log("Selesai!");
}

contohAsync();

/*
Output:
Mulai...
Hasil: ✅ Janji ditepati
Selesai!
*/


/* ======================
   🔹 Error Handling dengan try...catch
   ====================== */
function janjiGagal() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("❌ Janji gagal")), 1000)
  );
}

async function cobaError() {
  try {
    const hasil = await janjiGagal();
    console.log("Hasil:", hasil);
  } catch (err) {
    console.error("Tertangkap error:", err.message);
  } finally {
    console.log("✨ Selesai");
  }
}

cobaError();


/* ======================
   🔹 Contoh API dengan async/await
   ====================== */
async function ambilPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Gagal fetch, status: " + res.status);
    const data = await res.json();
    console.log("Post:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

ambilPost(1);


/* ======================
   🔹 Validasi data API
   ======================
   - Kadang kita ingin cek apakah data yang didapat sesuai kriteria
*/
async function ambilUserDanValidasi(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("User tidak ditemukan!");
    const user = await res.json();

    // validasi sederhana
    if (!user.email.includes("@")) {
      throw new Error("Email tidak valid!");
    }

    console.log("✅ User valid:", user.name, "-", user.email);
  } catch (err) {
    console.error("❌ Validasi gagal:", err.message);
  }
}

ambilUserDanValidasi(1);


/* ======================
   🔹 Mengolah banyak API sekaligus
   ======================
   - Bisa pakai Promise.all + async/await
*/
async function ambilSemuaData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json()),
    ]);

    console.log("👤 Jumlah user:", users.length);
    console.log("📝 Jumlah post:", posts.length);
    console.log("💬 Jumlah komentar:", comments.length);

    // contoh olah data: filter postingan user dengan id=1
    const postUser1 = posts.filter((p) => p.userId === 1);
    console.log("📌 Post milik User 1:", postUser1.length);
  } catch (err) {
    console.error("❌ Gagal ambil semua data:", err.message);
  }
}

ambilSemuaData();


/* ======================
   🔹 Loop async/await
   ======================
   - Jika ingin ambil data berurutan (tidak paralel)
   - Gunakan for...of dengan await
*/
async function ambilBeberapaPost(ids) {
  for (const id of ids) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await res.json();
      console.log(`Post ${id}:`, post.title);
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
}

ambilBeberapaPost([1, 2, 3]);


/* ======================
   🔹 Ringkasan Async/Await
   ======================
   1. async → fungsi akan mengembalikan Promise
   2. await → tunggu Promise selesai
   3. Gunakan try...catch untuk error handling
   4. Bisa dikombinasikan dengan Promise.all, Promise.race, dsb
   5. Cocok untuk bekerja dengan API karena kode lebih bersih
*/
