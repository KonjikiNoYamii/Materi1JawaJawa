// console.table({
//     Tugas:"Silahkan Explorasi Metode Metode ini",
//     Tugas_1:"Inisialisai Ulang Array By Index",
let init = ["Orb", "Nexus", "Tiga"];
init[1] = "Zero"; // dengan mengambil index saat nama variabel di panggil lalu memberikan elemen/value
console.log(init);
console.log("=============================================================");
//     Tugas_2:"Pahami .push()" ,
let namaIstri = ["Yami", "atri", "Shinoa"];
namaIstri.push("Yue"); //menggunakan push maka elemen yang ditambahkan berada pada urutan terakhir
console.log(namaIstri);
console.log("=============================================================");
//     Tugas_3:"Pahami .pop()",
namaIstri.pop(); // akan menghapus bagian elemen terbaru/terakhir
console.log(namaIstri);
console.log("=============================================================");
//     Tugas_4:"Pahami .shift()",
init.shift(); // akan menghambil elemen pertama
console.log(init);
console.log("=============================================================");
//     Tugas_5:"Pahami .unshift()",
init.unshift("Cosmos"); // menambahkan elemen pada urutan pertama
console.log(init);
console.log("=============================================================");
//     Tugas_6:"Pahami .splice()",
let statusJabatan = ["Presiden", "DPR", "DPRD", "MPR", "KPK", "MK", "MA"];
statusJabatan.splice(1, 6, "Kang Dehdi", "Luhut Panjaitan"); // memeotong juga menambahkan elemen
console.log(statusJabatan);
console.log("=============================================================");
//     Tugas_7:"Pahami .slice()",
let potong = statusJabatan.slice(0, 1); // bagian 0 untuk index yang diambil dan 1 untuk batas index yang akan diambil(index 1 tidak akan diambil)
console.log(potong);
console.log("=============================================================");
//     Tugas_8:"Pahami .map()",
let genreFilm = [2, 5, 3, 6, 3, 7, 3];
let pilihGenre = genreFilm.map(function (item, index, array) {
  // untuk mengambil keseluruhan array ke array baru
  return `ke -${index + 1} : ${item * 2}`; // menggunakan map untuk menjumlahkan masing masing array dengan iterasi
});
console.log(pilihGenre);
console.log("=============================================================");
//     Tugas_9:"Pahami .forEach()",
let paraIstri = ["Yami", "Yue", "Atri", "Victorique"];
let absenIstri = paraIstri.forEach(function (item, index, array) {
  // melooping sebuah array
  console.log(`Istri ke ${index + 1} yaitu MY ${item}`);
});
console.log("=============================================================");
//     Tugas_10:"Pahami .indexOf()",
nomor_istri = paraIstri.indexOf("Atri"); //mengambil nomor index sebuah elemen
console.log(nomor_istri);
console.log("=============================================================");
//     Tugas_11:"Pahami .includes()",
ngecek_istri = paraIstri.includes("Shinoa"); //mengecekk sebuah elemen dalam sebuah variabel array
console.log(ngecek_istri);
console.log("=============================================================");
//     Tugas_12:"Pahami .concat()",
let paraIstri2 = ["Silica", "Maybel", "Bronya"];
let barisanParaIstri = paraIstri.concat(paraIstri2); // menggabunhgkan 2 array menjadi 1
console.log(barisanParaIstri);
console.log("=============================================================");
//     Tugas_13:"Pahami .join()",
let number = [3, 54, 2, 5, 3, 412, 342, 322, 23, 324, 23];
let numberJadiString = number.join(", ");
let numberJadiString1 = number.join("-"); // mengubah tipe array menjadi string
console.log(numberJadiString);
console.log(numberJadiString1);
console.log("=============================================================");
//     Tugas_14:"Pahami .reverse()",
let presidenRI = ["jokowi", "Prabowo", "Megawati", "Habibie"];
let IRnediserp = presidenRI.reverse(); // membalikan urutan dari 0 ke terakhir dan terakhir ke 0
console.log(IRnediserp);
console.log("=============================================================");
//     Tugas_15:"Pahami .sort()",
urutanParaIstri = paraIstri.sort(); // mengurutkan nama my istri sesuai alphabet
console.log(urutanParaIstri);
console.log("=============================================================");
//     Tugas_16:"Pahami .filter()",
filterNumber = number.filter(function (item) {
  return item % 2 === 0; // mengambil sebagian array dengan kondisi tertentu
});
console.log(filterNumber);
console.log("=============================================================");
//     Tugas_17:"Pahami .reduce()",
reduceNumber = number.reduce(function (nilaiAwal, nilaiTerbaru) {
  return nilaiAwal + nilaiTerbaru; // total nilai dalam array
});
console.log(reduceNumber);
console.log("=============================================================");
//     Tugas_18:"Pahami .find()",
nyariIstri = paraIstri.find((item, index) => item === "Yami");
console.log(nyariIstri); // mencari elemen dalam array
console.log("=============================================================");
//     Tugas_19:"Pahami .some()",
standartIstri = paraIstri2.some((item) => item.length <= 6);
console.log(standartIstri); // mengecek minimal 1 elemen yang memenuhi kondisi
console.log("=============================================================");
//     Tugas_20:"Pahami .every()",
standartIstri1 = paraIstri.every((item) => item.length <= 7); // mengecek semua array apakah semua elemen memenuhi kondisi
console.log(standartIstri1);
console.log("=============================================================");
//     Tugas_21:"Pahami .findIndex()",
nyariNomorIstri = paraIstri.findIndex(function (item) {
  return item === "Yue"; // menampilkan index dari sebuah elemen array
});
console.log(nyariNomorIstri);
console.log("=============================================================");
//     Tugas_22:"Pahami .flat()",
let buah = ["Buah naga", ["Buah Hati", ["Buah Gomu-Gomu"]]]; //meratakan array menjadi sejajar atau 1 level
let ratakan = buah.flat(Infinity);
console.log(ratakan);
console.log("=============================================================");
//     Tugas_23:"Pahami .flatMap()",
let numberArray = [3, 4, 455, 2, 654, [5, 23, [654, 5]]];
let ratakanDanBuat = numberArray.flatMap((item) => {
  //flat map cuma bisa meratakan 1 level saja
  return [item * 2];
});
console.log(ratakanDanBuat);
console.log("=============================================================");
//     Tugas_24:"Pahami Spread [...buah, ...sayur,]",
let gabung = [...paraIstri, ...paraIstri2]; //digunakan untuk menggabungkan dan menyebarkan array atau bahbkan bisa memashkan setiap huruf pada sebuah value
console.log(gabung);
console.log("=============================================================");
//     Tugas_25:"Pahami Destructuring Array",
let istriIstri = ["Yami", "Yue", "Victorique"];
let [istri1, istri2, istri3] = istriIstri; //untuk mengambil nilai dari array (atau object) dan langsung menyimpannya ke dalam variabel terpisah.
console.log(istri1, istri2, istri3);
console.log("=============================================================");

let [toLoveRu, , gosick] = istriIstri;
console.log(toLoveRu); // bisa melewati 1
console.log(gosick);
console.log("=============================================================");

let istriSetia = ["YamiTercinta", 100];
let [wife, wife1, wife2, wife3 = "Victorique"] = istriSetia;
console.log(wife);
console.log(wife1);
console.log(wife3);
console.log("=============================================================");

let angka = [10, 20, 30, 40, 50];

let [awal, kedua, ...sisanya] = angka;

console.log(awal); //mengeluarkan nilai sisa
console.log(kedua);
console.log(sisanya);

// })
