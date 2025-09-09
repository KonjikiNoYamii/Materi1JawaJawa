// // soal 1
// let teman = ["Zaktor","Rehan","Faiz","Tsakif","Ucup"]
// console.log(teman[0]);
// console.log(teman[4]);

// console.log(teman.length);

// // soal 2
// let kosong = []
// let hobi = ["Nyapu","Ngepel","Beres-beres"]
// for (let i = 0; i < hobi.length; i++) {
//     kosong.push(hobi[i]);
    
// }
// console.log(hobi);

// // soal 3
// let pelajaran = ["B INDO","IPS","IPA","MTK"]
// pelajaran.pop()
// console.log(pelajaran);

// // soal 4
// let angka = [1,2,3,4,5]
// for(let i = 0;i <angka.length; i++){
//     console.log(`ini angka ke- ${i+1}: ${angka[i]}`);
// }

// // soal 5
// let namaKota = ["Medan","Tangerang","Tasik","Jakarta","Samarinda","Ciamis"]
// let lokasi = namaKota.indexOf("Ciamis")
// for(let i= 0; i <namaKota.length; i++){
//     if (namaKota[i] === "Ciamis") {
//         console.log("kota saya " + lokasi);
        
//     }else{
//         console.log("Kota tidak ada");
        
//     }
    
// }
// // soal 6
// let filmFav = ["Toaru railgun","Overlord","Atri my dear moments","Summer pockets"]
// filmFav[3] = "Yofukashi no uta"
// console.log(filmFav + "\n");

// // soal 7
// let olahragaFav = ["Basket","Volly","Sepak Bola"]
// olahragaFav.unshift("Berkuda")
// console.log(olahragaFav);

// // soal 8
// let bulan = ["Mei","Juni","Juli","Agustus","September"]
// let hapusBulan = bulan.shift()
// console.log(hapusBulan);
// console.log(bulan);

// //soal 9
// let makananRingan = ["Semut goreng","Belalang goreng"]
// let makananBerat = ["Gajah goreng","Jerapah goreng"]
// let varianMakanan = makananBerat.concat(makananRingan)
// console.log(varianMakanan);

// // soal 10
// let urutanAsli = ["A","B","C","D","E"]
// console.log(urutanAsli);
// let urutanPalsu = urutanAsli.reverse()
// console.log(urutanPalsu);

// // soal 11
// let namaIstri = ["Yami","Yue","Atri","Lala","Victorique","Enty"]
// console.log(namaIstri);
// urutanNamaIstri = namaIstri.sort()
// console.log(urutanNamaIstri);

// // soal 12
// let mataPelajran = ["Bahasa Sunda","Bahasa inggris","IPS"]
// function nyariMataPelajaran([pelajaran]) {
//     let ada = pelajaran.includes("Bahasa Sunda")
//     return ada
// }
// console.log(nyariMataPelajaran(mataPelajran));

// // soal 13
// let hari = ["Senin","Selasa","Rabu","Kamis","jumat","Sabtu","Ahad"]
// let ambilHari = hari.slice(0, 5)
// console.log(ambilHari);

// // soal 14
// let negara = ["Indonesia","Malaysia","Singapura","India","Jepang"]
// negara.forEach(function(nilai,index) {
//     console.log(`negara ke - ${index+1}: ${nilai}`);
// });

// // soal 15
// let angka1 = [50,30,10]
// let angkaKuadrat = angka1.map(function(angka) {
//     return angka * 2
// })
// console.log(angkaKuadrat);

// // soal 16
// let nilaiUjian = [70,80,100]
// let nilaiLulus = nilaiUjian.filter(function (lulus) {
//     return lulus >= 75
// })
// console.log(nilaiLulus);

// // soal 17
// let hargaBelanjaan =[1000,5000,4000,100000]
// let total = hargaBelanjaan.reduce(function(totalBelanjaan, totalHarga){
//     return totalBelanjaan += totalHarga
// })
//     console.log(total);

// // soal 18
// let teman1 = ["Udin","JokoNoBoto","Asrul"]
// let nyaritemen = teman1.find(function (item) {
//     return item.length > 9
// })
// console.log(nyaritemen);

// // soal 19
// let tinggiTeman = [150.160,157,180,200]
// let tingiSeorang = tinggiTeman.some(function (tinggi) {
//     return tinggi >= 160
// })
// let tinggiSemua = tinggiTeman.every(function (tinggi) {
//     return tinggi >= 160
// })
// console.log(tingiSeorang);
// console.log(tinggiSemua);

// soal 20
let data = [1,2,3,4,5,6,7,8,9,10]
let tumbalKeganjilan =[]
let tumbalKekalian = []
data.filter(function (number) {
    if (number % 2 == 1) {
        tumbalKeganjilan.push(number)
        // console.log(tumbalKeganjilan);   
    }
})
data.map(function (num) { 
    num = num * 2;
    tumbalKekalian.push(num) 
    // console.log(tumbalKekalian);
    
})
let hasil = tumbalKeganjilan.reduce(function (sum, num) {
    return sum + num
    // console.log(hasil);
})
let hasil1 = tumbalKekalian.reduce(function (sum,num) {
    return sum + num
})
let total = hasil1 += hasil
console.log(total);
