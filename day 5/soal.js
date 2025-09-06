// 1. Ada 4 metode

// Fungsi Declaration

let goku = 100000
let saitama = 200000
function aduPower(DBZ,OPM) {
    if(DBZ < OPM){
        console.log("Saitama menang");
    } else{
        console.log("Goku menang");
        
    }
}
console.log(aduPower(goku,saitama));
console.log("=====================================");


let gajiBulanan = 3000000
let potonganTapera = 0.95
function hitungPajak(gaji, persenPajak) {
    console.log(gaji *= persenPajak);
}
hitungPajak(gajiBulanan, potonganTapera);
console.log("=====================================");

// Fungsi expresion

daftarSalam(["Imam", "Maya", "Rafi"]);
function daftarSalam(namaArr) {
  for (let i = 0; i < namaArr.length; i++) {
    let salam = "Assalamualaikum";
    console.log(`${salam} ${namaArr[i]}`);
  }
}
console.log("=====================================");

let daftarBini = function (istri) {
    let bini = []
    for(let i = 0; i < istri.length; i++){
        bini.push(istri[i])
    }
    
    bini.join(", ")
    return `istriku ada 4 yaitu ${bini}`
}
console.log(daftarBini(["Yami","Yue","Atri"]));
console.log("=====================================");

// Fungsi Arrow

const hitoeng = (anka) => {
    let total = 0 // variabel tumbal
    for(let i = 0; i < anka.length; i++){
        total += anka[i] // value number dalam sebuah variabel array dijumlahkan
    }
    return total
};
console.log(hitoeng([2,4,5,6,7,3,6,9]));
console.log("=====================================");


const cariAngkaGenap = (angka) =>{
    let totalGenap = 0
    for(let i = 0; i < angka.length; i++){
        if(angka[i] % 2 == 0){
            totalGenap++;
        }
    } return totalGenap
}
console.log(cariAngkaGenap([5,6,8,4,2,7,3]));
console.log("=====================================");

// soal 2
function fungsi1() {
    let total = 0
    return function() {
        total = 5 + 7
        return total
    }
        
}
let tumbal = fungsi1()
console.log(tumbal()); // closure pertambahan
console.log("=====================================");

function fungsi2() {
    let total = 0
    return function() {
        total = 5 - 7
        return total
    }
        
}
let tumbal1 = fungsi2()
console.log(tumbal1()); // closure pengurangan
console.log("=====================================");

function fungsi3() {
    let total = 0
    return function() {
        total = 5 * 7
        return total
    }
        
}
let tumbal2 = fungsi3()
console.log(tumbal2()); // closure perkalian
console.log("=====================================");

function fungsi4() {
    let total = 0
    return function() {
        total = 6 % 2
        return total
    }
        
}
let tumbal3 = fungsi4()
console.log(tumbal3()); // closure pembagian
console.log("=====================================");

function buatSalam(nama) {
  return function() {
    return "Halo, " + nama + "!"
  }
}

let salamYami = buatSalam("Yami")
console.log(salamYami())  // return nama
console.log("=====================================");

// soal 3

let murid= [
  { nama: "Yami", nilai: 80 },
  { nama: "Yue", nilai: 75 },
  { nama: "Silica", nilai: 90 }
]

let total = 0
for (let i = 0; i < murid.length; i++) {
  total += murid[i].nilai
}

console.log("Total nilai:", total) 
console.log("=====================================");


 let absensi = ["Hadir", "Izin", "Alpa", "Hadir", "Hadir", "Izin"]
let rekap = { Hadir: 0, Izin: 0, Alpa: 0 }

for (let i = 0; i < absensi.length; i++) {
  rekap[absensi[i]]++
}
console.log(rekap) 
console.log("=====================================");

let angka = [1, 2, 3, 4, 5]
let total1 = 0

for (let i = 0; i < angka.length; i++) {
  total1 += angka[i]
}

console.log("Total:", total1)
console.log("=====================================");

let huruf = ["A", "B", "C", "D"]
let terbalik = []

for (let i = huruf.length - 1; i >= 0; i--) {
  terbalik.push(huruf[i])
}

console.log(terbalik)
console.log("=====================================");

let buku = {
  judul: "Belajar",
  halaman: 120
}

buku.penulis = "Silica"

console.log(buku)
console.log("=====================================");



 
