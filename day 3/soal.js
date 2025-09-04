//soal 1
let sholat = 17
function cekWaktuShalat(jam) {
    if (jam >= 4 && jam <= 5) {
        console.log("Waktu Subuh");
    }
    else if(jam >= 12 && jam <= 13){
        console.log("Waktu Dzuhur");
        
    }
    else if(jam >= 15 && jam <= 16){
        console.log("Waktu Ashar");
        
    }
    else if(jam >= 18 && jam < 19){
        console.log("Waktu Magrib");
    }
    else if(jam >= 19 && jam <= 20){
        console.log("Waktu Isya");
    }
    else {
        console.log("Bukan waktu sholat");
        
    }  
}
cekWaktuShalat(sholat);

//soal 2
let angkaUsia = 12
function validasiUsia(usia) {
    if (usia >= 12 && usia <= 18) {
        console.log("Layak mondok");
        
    } else {
        console.log("Tidak layak mondok");
        
    }
}
validasiUsia(angkaUsia);

//soal 3
let inputNilaiAkhlak = Number(prompt("Masukan nilai akhlak"))
function NilaiAkhlakSantri(Akhlak) {
    if (Akhlak > 85) {
        console.log("Akhlak Mulia");
        
    } else {
        console.log("Perlu pembinaan");
        
    }
    
}
NilaiAkhlakSantri(inputNilaiAkhlak);

//soal 4
let sarung = true
let kopiah = true
let sajadah = true
function equipmentSholat(pakaiSarung, pakaiKopiah, pakaiSajadah) {
    if (pakaiSarung == true && pakaiKopiah == true && pakaiSajadah == true) {
        console.log("Siap Sholat");
        
    }
    else {
        console.log("Belum siap shalat")
    }
}
equipmentSholat(sarung, kopiah, sajadah);

//soal 5
let alasan = String(prompt("Masukan Alasan"))
let outputAlasan = alasan.toLowerCase()
function alasanSantri(ngeles) {
    if (ngeles == "sakit" || ngeles == "keluarga" || ngeles == "prestasi") {
        console.log("Izin diterima")
    } else {
        console.log("Izin ditolak");
        
    }
}
alasanSantri(outputAlasan);

//soal 6
let inputHari = prompt("Masukan hari dari senin-minggu")
switch (inputHari) {
    case "senin":
        console.log("Kegiatan belajar senin");
        break;
    case "selasa":
        console.log("Kegiatan belajar senin");
        break;
    case "rabu":
        console.log("Kegiatan belajar senin");
        break;
    case "kamis":
        console.log("Kegiatan belajar senin");
        break;
    case "jumat":
        console.log("Kegiatan belajar senin");
        break;
    case "sabtu":
        console.log("Kegiatan belajar senin");
        break;
    case "minggu":
        console.log("Kegiatan belajar senin");
        break;            
    default:
        console.log("Hari tidak ada")
        break;
}

//soal 7
let inputMenu = prompt("Masukan menu makanan")
switch (inputMenu) {
    case "1":
        console.log("Nasi Goreng");
        break;
    case "2":
        console.log("Nasi Rebus");
        break;
    case "3":
        console.log("Nasi Bakar");
        break;
    case "4":
        console.log("Nasi Presto");
        break;
    case "5":
        console.log("Aqua Botol");
        break;         
    default:
        console.log("Tidak ada menu")
        break;
}

// Soal 8
let inputAsrama = prompt("Masukan nomor Asrama")
switch (inputAsrama) {
    case "1":
        console.log("Asrama rumah IT");
        break;
    case "2":
        console.log("Asrama pondok");
        break;
    case "3":
        console.log("Asrama elite");
        break;           
    default:
        console.log("Tidak ada asrama")
        break;
}

// soal 9
let inputPelanggaran = prompt("Masukan nomor pelang garan")
switch (inputPelanggaran) {
    case "1":
        console.log("NAZIhat");
        break;
    case "2":
        console.log("Hafalan Taubat");
        break;
    case "3":
        console.log("Kerja Sosial");
        break;  
    case "4":
    console.log("Skors");           
    default:
        console.log("Tidak kena sanksi")
        break;
}

// soal 10
let inputJawabatan = prompt("Masukan jawabatan")
switch (inputJawabatan) {
    case "Pemimpin pondok":
        console.log("ngurus pondok");
        break;
    case "Ketua Musrif":
        console.log("Ngawas musrif");
        break;
    case "Musrif":
        console.log("Ngurus santri");
        break;  
    case "Santri":
    console.log("Ngurus diri sendiri");           
    default:
        console.log("Tidak punya jawabatan")
        break;
}

// soal 11
let namaSantri = ["Faiz","Zaktor","Rehan","JaWaguri"]
for(let mulai= 0; mulai < namaSantri.length; mulai++){
    console.log(namaSantri[mulai]);
}

// soal 12
let hariHari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu"];
let hafalan = ["1 juz","2 juz","3 juz","4 juz","5 juz","6 juz","7 juz"];
for (let i = 0; i < hariHari.length; i++) {
    console.log(hariHari[i] + "= " + hafalan[i]);
}

// soal 13
let jam = ["4-5","12-13","15-16","18-19","19-20"];
let shalat = ["subuh","dzuhur","ashar","magrib","isya"];
for (let i = 0; i < jam.length; i++){
    console.log(jam[i] + "waktunya sholat: " + shalat[i]);
}

//soal 14
let semangat = "Semangat santri"
let N = 5;
for(let i = 0; i < N; i++){
console.log(semangat);
}

//soal 15
for (let i = 1; i <= N; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*"; 
    }
    console.log(bintang);
}

//soal 16
let inputHarta =(prompt("input gram emas"))
let totalZakat = inputHarta *= 0.25 
if (totalZakat >= 85) {
    console.log("zakat 2.5%");
}
else{
    console.log("Belum wajib zakat");
    
}

// soal 17
let username = "KonjikiNoYami"
let password = "94326123"
let inputLoginUsername = prompt("Masukan username")
let inputLoginPassword = prompt("Masukan password")
if (inputLoginUsername == username && inputLoginPassword == password) {
    console.log("Login berhasil");
} else {
    console.log("Login gagal");
    
}

//soal 18
let inputHafalan = Number(prompt("Masukan Hafalan"))
let inputAkhlak = Number(prompt("Masukan Akhlak"))
if (inputHafalan > 10 && inputAkhlak > 80) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
    
}

//soal 19
let inputUsia = Number(prompt("Masukan usia"))
let inputBelanja = Number(prompt("Masukan total belanjaan"))
if (inputUsia < 18 || inputBelanja > 1000000) {
    console.log("Diskon 10%");
} else {
    console.log("Belum, dapet");
    
}

//soal 20
let passwordSign1 = "Yami94326"; 
let passwordSign = prompt("Masukkan password");

if (
    passwordSign.length >= 8 &&           
    passwordSign.match(/[A-Z]/) &&
    passwordSign.match(/[a-z]/) &&        
    passwordSign.match(/[0-9]/)          
) {
    console.log(passwordSign === passwordSign1); 
} else {
    console.log("Password tidak valid");
}

// soal 21
let ustadz = ["Hanan", "Abdul", "Somad"]
let hari = ["senin", "rabu", "sabtu"]
function pengajian(hariList, ustadzList) {
    for(let i = 0; i < ustadzList.length; i++){
        console.log(hariList[i] + "diisi oleh: " + ustadzList[i]);
    }
    return(hari,ustadz);
}
pengajian(hari,ustadz);

//soal 22
let lebarPersegiPanjang = Number(prompt("Masukan Lebar"))
let panjangPersegiPanjang = Number(prompt("Masukan Panjang"))
function hitungan(lebar, panjang) {
    let luas = lebar * panjang
    let keliling = 2 * (lebar + panjang)
    return{
        luas,
        keliling
    }
}
let hasil = hitungan(lebarPersegiPanjang, panjangPersegiPanjang);
console.log(hasil);

//soal 23
let tahunHijriyah = Number(prompt("Masukkan Tahun Hijriyah"));

function hijriyahKeMasehi(hijriyah) {
    let masehi = hijriyah + 622;
    return masehi;
}

let hasilTahun = hijriyahKeMasehi(tahunHijriyah);
console.log("Tahun Masehi: " + hasilTahun);

//soal 24
let hafalanHarian = [1, 2, 3, 4, 5, 6, 7];
function totalHafalan(hafalanHarian) {
    let total = 0;
    for (let i = 0; i < hafalanHarian.length; i++) {
        total += hafalanHarian[i];
    }
    return total + " juz";
}
let hasilHafalan = totalHafalan(hafalanHarian);
console.log("Total Hafalan: " + hasilHafalan);

//soal 25
let nama = prompt("Masukkan nama:");

function balikNama(teks) {
    return teks.split('').reverse().join('');
}

let hasilBalik = balikNama(nama);
console.log("Hasil terbalik: " + hasilBalik);

