/*
=========================================
📚 DOM ELEMENT SELECTOR – CONTOH KOMPLEKS
=========================================

🎯 Tujuan: Memberikan contoh penggunaan selector 
pada situasi nyata yang lebih kompleks.

-----------------------------------------
🔹 1. Manipulasi Banyak Elemen dengan Class
-----------------------------------------
HTML:
  <ul>
    <li class="menu">Home</li>
    <li class="menu">About</li>
    <li class="menu">Contact</li>
  </ul>

JS:
  const menuItems = document.getElementsByClassName("menu")
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = "blue"
    menuItems[i].innerText = `Menu ke-${i + 1}`
  }

💡 Catatan:
- Karena hasil getElementsByClassName berupa HTMLCollection,
  kita pakai for biasa (bukan forEach).

-----------------------------------------
🔹 2. querySelector dengan kombinasi CSS Selector
-----------------------------------------
HTML:
  <div class="card">
    <h2 class="title">Judul 1</h2>
  </div>
  <div class="card">
    <h2 class="title">Judul 2</h2>
  </div>

JS:
  const firstTitle = document.querySelector(".card .title")
  firstTitle.style.color = "red"

💡 Catatan:
- querySelector memilih ELEMEN PERTAMA saja.
- Jadi hanya "Judul 1" yang berubah merah.

-----------------------------------------
🔹 3. querySelectorAll + forEach
-----------------------------------------
HTML:
  <div class="card">
    <h2 class="title">Judul 1</h2>
  </div>
  <div class="card">
    <h2 class="title">Judul 2</h2>
  </div>

JS:
  const allTitles = document.querySelectorAll(".card .title")
  allTitles.forEach((el, idx) => {
    el.style.color = "green"
    el.innerText = `Judul baru ke-${idx + 1}`
  })

💡 Catatan:
- Semua elemen dengan class "title" dimodifikasi.
- Lebih fleksibel daripada getElementsByClassName.

-----------------------------------------
🔹 4. Nested Selector (selector bersarang)
-----------------------------------------
HTML:
  <div id="profile">
    <h1 class="name">Master</h1>
    <p class="bio">Belajar DOM</p>
  </div>

JS:
  const name = document.querySelector("#profile .name")
  const bio = document.querySelector("#profile .bio")
  name.style.color = "purple"
  bio.style.fontStyle = "italic"

💡 Catatan:
- Bisa pilih elemen spesifik dalam container tertentu
  dengan kombinasi selector CSS.

-----------------------------------------
🔹 5. Mengubah Atribut dengan Selector
-----------------------------------------
HTML:
  <img class="foto" src="default.jpg" alt="">

JS:
  const foto = document.querySelector(".foto")
  foto.setAttribute("src", "profil.jpg")
  foto.setAttribute("alt", "Foto Profil Master")

💡 Catatan:
- querySelector bisa dipakai untuk manipulasi atribut juga.
- setAttribute(key, value) → mengubah atribut HTML.

-----------------------------------------
🔹 6. Seleksi Elemen Bergantian (Even & Odd)
-----------------------------------------
HTML:
  <ul>
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
    <li class="item">Item 4</li>
  </ul>

JS:
  const items = document.querySelectorAll(".item")
  items.forEach((el, idx) => {
    if (idx % 2 === 0) {
      el.style.color = "red"     // genap
    } else {
      el.style.color = "blue"    // ganjil
    }
  })

💡 Catatan:
- Dengan querySelectorAll (NodeList) kita bisa looping dan 
  memberi efek berbeda tiap index.

-----------------------------------------
🔹 7. Chain Selector (langsung modifikasi)
-----------------------------------------
HTML:
  <p id="status">Loading...</p>

JS:
  document.getElementById("status").innerText = "Selesai!"

💡 Catatan:
- Tidak perlu simpan ke variabel, bisa langsung chaining.
- Bagus untuk 1 baris sederhana.

=========================================
📌 KESIMPULAN
- Gunakan querySelector / querySelectorAll untuk fleksibilitas (bisa CSS selector).
- Gunakan getElementById jika hanya butuh cepat ke 1 elemen unik.
- Looping sangat penting saat manipulasi banyak elemen.
=========================================
*/
