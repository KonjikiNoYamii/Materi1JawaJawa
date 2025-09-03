//level 1

//soal 1
let namaLengkap = "Zidan Albani";
console.log(namaLengkap);

let angka1 = 5;
let angka2 = 5;
console.log(angka1 + angka2)

//soal 2
angka1 = 20
console.log(angka1 * angka2)

//soal 3
let x = 10
let y = 3
console.log(x % y);

//soal 4
let saldo1 = 100000
let saldo2 = 25000
console.log(saldo1 - saldo2);

//soal 5
let isStudent = true
console.log(isStudent)

//soal 6
let panjang = 20
let lebar = 20
let tinggi = 20
console.log(panjang * lebar * tinggi);

//soal 7
let harga = 50000
console.log(harga += 10000);

//soal 8
let greeting = "Selamat"
console.log(greeting += "Pagi");

//soal 9
let totalPembelian = 150000
console.log(totalPembelian *= 0.9);

//level 2

//soal 1
let umurBudi = 30
let umurAndi = 30
if(umurBudi <= umurAndi) {
    document.getElementById('cekUmur').innerHTML = "Umur Budi lebih muda daripada Andi"
}
else{
    document.getElementById('cekUmur').innerHTML = "Umur Budi lebih tua daripada Andi"
}

//soal 2
let password = "rahasia123"
let inputPassword = prompt("Masukan password")
if (inputPassword == password) {
    alert("Password sesuai")
} else {
    alert("Password salah!")
}

//soal 3
let nilaiUjian = 85
console.log(nilaiUjian >= 80 && nilaiUjian <= 90);

//soal 4
let cuaca = "hujan"
let adaPayung = true
console.log(cuaca == "hujan" || adaPayung == true);

//soal 5
let halo = "Halo, selamat datang!"
let tampilkan = document.getElementById("sapa")
function sapaan () {
    tampilkan.innerHTML = halo
}
sapaan()

//soal 6
let a = 50
let b = 30
function jumlahkan() {
    console.log(a + b)
}
jumlahkan()

//soal 7
let nilaiKkm = 75
function cekNilai () {
    if(nilaiKkm >= 70) {
        alert("anda lulus!")
    }
    else{
        alert("Anda belum lulus!")
    }
};
cekNilai()

//soal 8
let cekAngka = 10
function cekGenapGanjil() {
    if (cekAngka % 2 == 0) {
        console.log("genap")
    } else {
        console.log("ganjil")
    }
}
cekGenapGanjil()

//soal 9
let umurDewasa = 19
function ngecekUmur(umur) {
    if (umur > 17) {
        console.log("Anda sudah dewasa")
    }
    else {
        console.log("Anda belum dewasa")
    }
}
ngecekUmur(umurDewasa)

//soal 10
let cekNilaiJawaban = 100
function ngecekNilai(nilai) {
    if (nilai > 90) {
        console.log("Nilai anda A")
    }
    else {
        console.log("Nilai anda dibawah A")
    }
}
ngecekNilai(cekNilaiJawaban)

//level 3

//soal 1

let namaAnda = prompt("Masukan nama")
if (namaAnda) {
    alert("selamat datang" + namaAnda)
}
else {
    alert("Anda tidak memasukan nama")
}

//soal 2
let belanjaan = 50000
let diskon = 0.9
let total = [belanjaan, diskon]
function hitungDiskon(totalBelanja, persenDiskon) {
    console.log(totalBelanja *= persenDiskon)
}
hitungDiskon(...total);
// tanda "... untuk menampilkan variabel array untuk dipecah"

//soal 3
let gajiBulanan = 3000000
let potonganTapera = 0.95
function hitungPajak(gaji, persenPajak) {
    console.log(gaji *= persenPajak);
}
hitungPajak(gajiBulanan, potonganTapera);

//soal 4
let umurLayak = 19
let sim = true
function cekKelayakan(umur, punyaSim) {
    if (umur > 18 && punyaSim == true) {
        console.log("Anda layak mengemudi");
    } else {
        console.log("Anda belum layak mengemudi");
        
    }
}
cekKelayakan(umurLayak, sim);

//soal 5
let suhuCuaca = 21
function cekSuhu(suhu) {
    if(suhu > 30) {
        console.log("Suhu panas");
        
    }
    if(suhu >= 20 && suhu <= 30) {
        console.log("Suhu normal");
        
    }
    if(suhu < 20) {
        console.log("Suhu dingin");
        
    }

}
cekSuhu(suhuCuaca);