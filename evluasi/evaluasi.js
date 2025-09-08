// soal 1
let penjualanMakanan = [8000,12000,3000]
let pembelianMakanan = [15,10,20]
// function buSriBingung(penjualan, pembelian) {
//     let tumbal = 0
//     for(let i = 0; i < penjualan.length ; i++){
//        tumbal += penjualan[i] * pembelian[i]
//     }
//     console.log(tumbal);
    
// }
// (buSriBingung(penjualanMakanan, pembelianMakanan));

// soal 2
// function buSriBingung(penjualan, pembelian) {
//     let tumbal = 0
//     for(let i = 0; i < penjualan.length ; i++){
//        tumbal += penjualan[i] * pembelian[i]
       
//     }
//     if (tumbal >= 50000) {
//         tumbal *= 0.9
//     }
//     console.log(tumbal);
    
// }
// (buSriBingung(penjualanMakanan, pembelianMakanan));

// soal 3

// function warungSri(penjualan, pembelian){
//     let nazi = 0
//     let ayam = 0
//     let teh = 0
//     for(let i = 0; i < pembelian.length; i++){
//         nazi += penjualan[i] * pembelian[i] 
//         console.log(nazi);
//         break;  
        
        
//     }
//     for(let j = 1; j < pembelian.length; j++){
//             ayam = penjualan[j] * pembelian[j]
//             console.log(ayam);
//             break;
//         }
//     for(let k = 2; k < pembelian.length; k++){
//             teh = penjualan[k] * pembelian[k]
//             console.log(teh);
//             break;
//         }
//         return `Penjualan nasi gudeg ${nazi}, ayam goreng ${ayam}, teh ${teh}`
// }
// console.log(warungSri(penjualanMakanan, pembelianMakanan))

// soal 4
// let level = ["biasa","member","VIP"]
// let diskon = ["5%","10%","15%"]
// let hasil = []
// for(let i = 0;i < 3; i++){
// switch (level) {
//     case "biasa":
//         console.log(diskon[i]);
//         break;
//     case "member":
//         console.log(diskon[i]);
//         break;
//     case "VIP":
//         console.log(diskon[i]);
//         break;        
//     }    
//     hasil.push(`${level[i]} ${diskon[i]}`)
//     hasil.join(", ")
// }
// console.log(hasil);

// soal 5
// function hitungRatarata(pendapatanTotal) {
//     let total = 0
//     pendapatanTotal.forEach(dapat =>{
//     total += dapat
//     });

//     let rataRata = total / pendapatanTotal.length
//     return rataRata.toFixed(0);
    
// }
// console.log(hitungRatarata([150000,200000,175000,180000,165000,190000,145000]));

// soal 6
// let barangJoko = [
//     {barang: "kaos", jumlah: 10, harga: 75000},
//     {barang: "celana", jumlah: 30, harga: 150000},
//     {barang: "jaket", jumlah: 15, harga: 200000}
// ]
// console.log(barangJoko)

// // soal 7
// let belanja = 10000
// let poin = 0
// if(belanja >= 1000){
//     poin++;
// }
// console.log(`anda punya ${poin}`);

// // soal 8
// let stok = 10
// let harga = 10000
// if (stok <= 10) {
//     harga = harga * 0.95
// }
// console.log(harga);

// // soal 9
// if(stok < 20){
//     console.log("Stok anda hampir habis");
    
// }

// soal 10
// let poin = 400
// if (poin > 0 && poin <= 99) {
//     console.log("Anda mendapat rank bronze");
    
// } else if(poin >= 100 && poin <= 499) {
//     console.log("anda mendapat rank silver");
    
// } else if(poin >= 500){
//     console.log("anda mendapat rank gold");
    
// }else {
//     console.log("tidak ada rank");
    
// }

// soal 11
// let nilai = [52, 7, 67, 18, 47, 71, 87, 55, 10, 28, 
//  51, 23, 43, 2, 5, 81, 83, 14, 18, 9, 
//  54, 50, 66, 33, 85]
//  function hitungRatarata(nilaiTotal) {
//     let total = 0
//     nilaiTotal.forEach(dapat =>{
//     total += dapat
//     });

//     let rataRata = total / nilaiTotal.length
//     return rataRata.toFixed(0);
//  }
// console.log(hitungRatarata(nilai));

// soal 12
// let nilaiSiswa = 80
//     if (nilaiSiswa >= 85 && nilaiSiswa<= 100) {
//         console.log("Mendapat nilai A");
//     } else if(nilaiSiswa >= 70 && nilaiSiswa <= 84) {
//         console.log("Mendapat nilai B");
//     } else if (nilaiSiswa >= 60 && nilaiSiswa <= 69){
//         console.log("Mendapat nilai C");
//     }else if (nilaiSiswa <= 60){
//         console.log("Mendapat nilai D");  
//     }
// soal 13
// let tumbal = []
// for(let i = 1; i <= 25; i++){
//     tumbal.push({
//         nama:`siswa:${i}`,
//         nilai:  Math.floor(Math.random() * 101)
//     });
// }
// tumbal.forEach(Item => {
//     console.log(`${Item.nama} dengan nilai ${Item.nilai}`)
// });

// soal 14
// let rataRata = 80
// if (rataRata >= 80) {
//     console.log("siswa mendapat reward");
    
// } else {
//     console.log("siswa tidak mendapat reward");
    
// }

// soal 15
// let nilai = [52, 7, 67, 18, 47, 71, 87, 55, 10, 28, 
// 51, 23, 43, 2, 5, 81, 83, 14, 18, 9, 
// 54, 50, 66, 33, 85]
// nilai.sort((a, b) => b -a);
// console.log(nilai);

// soal 16
// let pendapatan = [50000,100000,200000]
// let waktu = [2,4,8]
// let totalPendapatan = pendapatan.reduce(function(total, item){
//     return total + item
// })
// let totalwaktu = waktu.reduce(function(total, item){
//     return total + item
// },)
// console.log(`uang yang didapat ${totalPendapatan} dengan pengerjaan total ${totalwaktu} jam`);

// soal 17
// let totalwaktu = 14 
// let totalhari = 0

// while (totalwaktu >= 8) {
//     totalwaktu -= 8
//     totalhari++
// }
// console.log(`total selama hari ${totalhari} dan ${totalwaktu} jam`);

// //soal 18
// let antrian = 10
// for(let i= 1; i <= antrian; i++){
//     console.log(`anda mendapat antrian ke ${i}`);
    
//}
// soal 19
// let service = ["berat","sedang","ringan"]
// let waktu = ""
// let hasil =[]
// for(let i = 0; i < service.length; i++){
//     switch (true) {
//         case service[i] === "berat":
//             waktu = "1 bulan"
//             break;
//         case service[i] === "sedang":
//             waktu = "2 minggu"    
//             break;
//         case service[i] === "ringan":
//             waktu = "1 minggu"    
//         default:
//             break;
//     } hasil.push(`${service[i]} ${waktu}`)
// }
// console.log(hasil);

// soal 20
let service = ["berat","sedang","ringan"]
let waktu = ""
let hasil =[]
let komisi = ""
for(let i = 0; i < service.length; i++){
    switch (true) {
        case service[i] === "berat":
            waktu = "1 bulan"
            komisi = "20%"
            break;
        case service[i] === "sedang":
            waktu = "2 minggu"
            komisi = "15%"    
            break;
        case service[i] === "ringan":
            waktu = "1 minggu"
            komisi = "10%"    
        default:
            break;
    } hasil.push(`service ${service[i]} garansi ${waktu} dengan komisi ${komisi}`)
}
console.log(hasil);

// soal 21
let paketKursus = [
    {nama: "Basic",harga: 500000, pertemuan: "4 pertemuan"},
    {nama: "Standart",harga: 800000, pertemuan: "8 pertemuan"},
    {nama: "Premium",harga: 1200000, pertemuan: "12 pertemuan"}
];

// soal 22
let cicilan = [2,3,4]
let cicilan1 = 0
let cicilan2 = 0
let cicilan3
for(let i = 0;i < cicilan.length; i++){
    if(paketKursus[i].harga == 500000 ){
    cicilan1 = paketKursus[i].harga *= cicilan[i]
    }
    else if(paketKursus[i].harga == 800000 ){
    cicilan2 = paketKursus[i].harga *= cicilan[i]
    }
    else if(paketKursus[i].harga == 1200000 ){
    cicilan3 = paketKursus[i].harga *= cicilan[i]
    }
}   
    console.log(`basic 2x: ${cicilan1} standart: 3x ${cicilan2} premium: 4x ${cicilan3}`);

// soal 23

