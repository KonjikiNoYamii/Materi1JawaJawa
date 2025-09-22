/*
=========================
📚 CATATAN TENTANG JSON
=========================

1. Apa itu JSON?
   - JSON singkatan dari JavaScript Object Notation
   - Bentuk data untuk menyimpan & bertukar informasi
   - Mirip objek di JavaScript, tapi dengan aturan yang lebih ketat
   - Banyak digunakan dalam komunikasi antara server ↔ client (misalnya API)

   Contoh JSON:
   {
     "nama": "Aisyah",
     "umur": 18,
     "hobi": ["membaca", "menulis", "musik"],
     "status": true
   }

   ⚠️ Catatan penting:
   - Key harus berupa string dengan tanda kutip ganda ("")
   - Nilai bisa berupa: string, number, boolean, array, object, atau null
   - Tidak boleh ada function
   - Tidak boleh ada komentar (beda dengan file JS)
*/


/* ======================
   🔹 Perbedaan JSON vs Object
   ======================

   ➝ Object di JavaScript:
*/
const orang = {
  nama: "Aisyah",
  umur: 18,
  aktif: true
};

/*
   ➝ JSON (biasanya bentuk string):
   "{ "nama": "Aisyah", "umur": 18, "aktif": true }"
*/


/* ======================
   🔹 Konversi Object ↔ JSON
   ======================

   ➝ Object → JSON string
   Gunakan JSON.stringify()
*/
const data = { nama: "Budi", umur: 20 };
const jsonStr = JSON.stringify(data);

console.log(jsonStr);
// Output: {"nama":"Budi","umur":20}
// bentuk string JSON yang bisa dikirim ke server

/*
   ➝ JSON string → Object
   Gunakan JSON.parse()
*/
const jsonText = '{"nama":"Citra","umur":22}';
const obj = JSON.parse(jsonText);

console.log(obj.nama); // "Citra"
console.log(obj.umur); // 22


/* ======================
   🔹 JSON dengan Array
   ======================
*/
const siswa = [
  { "nama": "Andi", "nilai": 90 },
  { "nama": "Budi", "nilai": 85 },
  { "nama": "Citra", "nilai": 95 }
];

// Akses data array
console.log(siswa[0].nama);  // "Andi"
console.log(siswa[2].nilai); // 95


/* ======================
   🔹 JSON dalam Fetch API
   ======================
   Biasanya JSON dipakai untuk respon dari server
*/
async function ambilData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json(); // parsing JSON → object/array
  console.log(data);
}

ambilData();


/* ======================
   🔹 JSON Nested (bersarang)
   ======================
*/
const produk = {
  "id": 1,
  "nama": "Laptop",
  "harga": 15000000,
  "spesifikasi": {
    "processor": "Intel i7",
    "ram": "16GB",
    "storage": "512GB SSD"
  }
};

console.log(produk.spesifikasi.ram); // "16GB"


/* ======================
   🔹 Ringkasan
   ======================
   - JSON = format data universal (ringan, mudah dibaca, dipakai di banyak bahasa)
   - JSON.stringify(obj) → ubah object ke JSON string
   - JSON.parse(jsonString) → ubah JSON string ke object
   - Sangat umum dipakai dalam API/web service
*/
