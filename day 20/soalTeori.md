# Latihan Validasi Form

## 1. Apa fungsi dari atribut `required` pada form input?
**Penjelasan:**  
Atribut `required` digunakan untuk memaksa user mengisi field sebelum form bisa dikirim. Jika kosong, browser akan otomatis menolak submit.

---

## 2. Bagaimana cara menggunakan `pattern` untuk validasi email sederhana di HTML?
**Penjelasan:**  
Atribut `pattern` dipakai untuk mencocokkan input dengan pola tertentu. Untuk email sederhana bisa menggunakan pola yang memastikan ada tanda @ di dalam input, misalnya pola `.+@.+`.

---

## 3. Apa bedanya `min` dan `minlength` pada input?
**Penjelasan:**  
- `min` digunakan pada input angka atau tanggal untuk menentukan nilai minimum yang boleh dimasukkan.  
- `minlength` digunakan pada input teks untuk menentukan jumlah karakter minimal yang harus diisi user.

---

## 4. Bagaimana cara mencegah form reload saat submit di JavaScript?
**Penjelasan:**  
Form secara default akan reload saat disubmit. Untuk mencegahnya, digunakan fungsi `preventDefault()` pada objek event di dalam event listener `submit`.

---

## 5. Apa perbedaan validasi di sisi HTML dan sisi JavaScript?
**Penjelasan:**  
- Validasi HTML: dilakukan otomatis oleh browser melalui atribut seperti `required`, `pattern`, `min`, dan `maxlength`. Mudah dipakai namun terbatas.  
- Validasi JavaScript: dilakukan dengan logika manual menggunakan JavaScript, lebih fleksibel untuk aturan kompleks seperti validasi konfirmasi password atau pengecekan data lewat API.
