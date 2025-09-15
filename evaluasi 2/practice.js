console.log("halo");

let angka = [1,2,3,4,5,6]
console.table(angka)

console.assert(10 >= 18);

console.warn("warning")

console.time("mulai")
console.timeLog("mulai")
console.timeLog("mulai")
console.timeLog("mulai")
console.timeLog("mulai")
console.timeEnd("mulai", "berhenti")

let istriFirst = "Yami"
console.count(istriFirst);
console.count(istriFirst);
console.count(istriFirst);
console.count(istriFirst);
console.countReset(istriFirst);
console.count(istriFirst);

var nama = "zidan"
var nama = "zidan edit"
nama = "zidan edit 2"

let nama1 = "zidan"
// let nama1 = "zidan edit"
nama1 = "zidan edit 2"

const nama2 = "zidan"
// const nama2 = "zidan edit"
// nama2 = "zidan edit 2"

let stringg = "aeujifaei"
let number = 4324
let booleann = true
let booleannn = false
let nulll = null
let undefinedd;
let objectt = {
    nama : "zidan",
    kelas : "5 sd"
}
let arrayy = [1,2,4,23,5,2,5]
let pertambahan = 5+6
let Pengurangan = 5-2
let Pembagian = 6/2
let moduluss = 10 %2

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

function test(wadah) {
    console.log(wadah);
    
}
test("halo")

let sapa = "Halo"
test1(sapa)
function test1(wadah) {
    console.log(wadah);    
}

daftarSalam(["Imam", "Maya", "Rafi"]);
function daftarSalam(namaArr) {
  for (let i = 0; i < namaArr.length; i++) {
    let salam = "Assalamualaikum";
    console.log(`${salam} ${namaArr[i]}`);
  }
}

const hitoeng = (anka) => {
    let total = 0 // variabel penampung
    for(let i = 0; i < anka.length; i++){
        total += anka[i] // value number dalam sebuah variabel array dijumlahkan
    }
    return total
};
console.log(hitoeng([2,4,5,6,7,3,6,9]));

// let namaIstri = ["Yami", "atri", "Shinoa"];
// namaIstri.push("Yue"); //menggunakan push maka elemen yang ditambahkan berada pada urutan terakhir
// console.log(namaIstri);
// console.log("=============================================================");

// namaIstri.pop(); // akan menghapus bagian elemen terbaru/terakhir
// console.log(namaIstri);
// console.log("=============================================================");

// init.shift(); // akan menghambil elemen pertama
// console.log(init);
// console.log("=============================================================");

// init.unshift("Cosmos"); // menambahkan elemen pada urutan pertama
// console.log(init);
// console.log("=============================================================");

// let statusJabatan = ["Presiden", "DPR", "DPRD", "MPR", "KPK", "MK", "MA"];
// statusJabatan.splice(1, 6, "Kang Dehdi", "Luhut Panjaitan"); // memeotong juga menambahkan elemen
// console.log(statusJabatan);
// console.log("=============================================================");

// let potong = statusJabatan.slice(0, 1); // bagian 0 untuk index yang diambil dan 1 untuk batas index yang akan diambil(index 1 tidak akan diambil)
// console.log(potong);
// console.log("=============================================================");

// let genreFilm = [2, 5, 3, 6, 3, 7, 3];
// let pilihGenre = genreFilm.map(function (item, index, array) {
//   // untuk mengambil keseluruhan array ke array baru
//   return `ke -${index + 1} : ${item * 2}`; // menggunakan map untuk menjumlahkan masing masing array dengan iterasi
// });
// console.log(pilihGenre);
// console.log("=============================================================");

// let paraIstri = ["Yami", "Yue", "Atri", "Victorique"];
// let absenIstri = paraIstri.forEach(function (item, index, array) {
//   // melooping sebuah array
//   console.log(`Istri ke ${index + 1} yaitu MY ${item}`);
// });
// console.log("=============================================================");

// nomor_istri = paraIstri.indexOf("Atri"); //mengambil nomor index sebuah elemen
// console.log(nomor_istri);
// console.log("=============================================================");

// ngecek_istri = paraIstri.includes("Shinoa"); //mengecekk sebuah elemen dalam sebuah variabel array
// console.log(ngecek_istri);
// console.log("=============================================================");

// let paraIstri2 = ["Silica", "Maybel", "Bronya"];
// let barisanParaIstri = paraIstri.concat(paraIstri2); // menggabunhgkan 2 array menjadi 1
// console.log(barisanParaIstri);
// console.log("=============================================================");

// let number = [3, 54, 2, 5, 3, 412, 342, 322, 23, 324, 23];
// let numberJadiString = number.join(", ");
// let numberJadiString1 = number.join("-"); // mengubah tipe array menjadi string
// console.log(numberJadiString);
// console.log(numberJadiString1);
// console.log("=============================================================");

// let presidenRI = ["jokowi", "Prabowo", "Megawati", "Habibie"];
// let IRnediserp = presidenRI.reverse(); // membalikan urutan dari 0 ke terakhir dan terakhir ke 0
// console.log(IRnediserp);
// console.log("=============================================================");

// urutanParaIstri = paraIstri.sort(); // mengurutkan nama my istri sesuai alphabet
// console.log(urutanParaIstri);
// console.log("=============================================================");

// filterNumber = number.filter(function (item) {
//   return item % 2 === 0; // mengambil sebagian array dengan kondisi tertentu
// });
// console.log(filterNumber);
// console.log("=============================================================");

// reduceNumber = number.reduce(function (nilaiAwal, nilaiTerbaru) {
//   return nilaiAwal + nilaiTerbaru; // total nilai dalam array
// });
// console.log(reduceNumber);
// console.log("=============================================================");
// nyariIstri = paraIstri.find((item, index) => item === "Yami");
// console.log(nyariIstri); // mencari elemen dalam array
// console.log("=============================================================");

// standartIstri = paraIstri2.some((item) => item.length <= 6);
// console.log(standartIstri); // mengecek minimal 1 elemen yang memenuhi kondisi
// console.log("=============================================================");

// standartIstri1 = paraIstri.every((item) => item.length <= 7); // mengecek semua array apakah semua elemen memenuhi kondisi
// console.log(standartIstri1);
// console.log("=============================================================");

// nyariNomorIstri = paraIstri.findIndex(function (item) {
//   return item === "Yue"; // menampilkan index dari sebuah elemen array
// });
// console.log(nyariNomorIstri);
// console.log("=============================================================");

// let buah = ["Buah naga", ["Buah Hati", ["Buah Gomu-Gomu"]]]; //meratakan array menjadi sejajar atau 1 level
// let ratakan = buah.flat(Infinity);
// console.log(ratakan);
// console.log("=============================================================");

// let numberArray = [3, 4, 455, 2, 654, [5, 23, [654, 5]]];
// let ratakanDanBuat = numberArray.flatMap((item) => {
//   //flat map cuma bisa meratakan 1 level saja
//   return [item * 2];
// });
// console.log(ratakanDanBuat);
// console.log("=============================================================");

// let gabung = [...paraIstri, ...paraIstri2]; //digunakan untuk menggabungkan dan menyebarkan array atau bahbkan bisa memashkan setiap huruf pada sebuah value
// console.log(gabung);
// console.log("=============================================================");

// let istriIstri = ["Yami", "Yue", "Victorique"];
// let [istri1, istri2, istri3] = istriIstri; //untuk mengambil nilai dari array (atau object) dan langsung menyimpannya ke dalam variabel terpisah.
// console.log(istri1, istri2, istri3);
// console.log("=============================================================");

// let [toLoveRu, , gosick] = istriIstri;
// console.log(toLoveRu); // bisa melewati 1
// console.log(gosick);
// console.log("=============================================================");

// let istriSetia = ["YamiTercinta", 100];
// let [wife, wife1, wife2, wife3 = "Victorique"] = istriSetia;
// console.log(wife);
// console.log(wife1);
// console.log(wife3);
// console.log("=============================================================");

// let angka = [10, 20, 30, 40, 50];

// let [awal, kedua, ...sisanya] = angka;

// console.log(awal); //mengeluarkan nilai sisa
// console.log(kedua);
// console.log(sisanya);








