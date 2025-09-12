// let orang ={
//     nama : "Atri",
//     umur : 30,
//     sapa: function() {
//         console.log(`halo, ini ${this.nama}`);
        
//     }
// }
// orang.sapa()

let number =[1,2,3,4]

let [angka1, angka2, angka3, angka4] =number
console.log(angka1);
console.log(angka2);
console.log(angka3);
console.log(angka4);
console.log(angka1,angka2,angka3,angka4);

let mobil ={
    merek: "honda",
    tahun: "1993"
}
let {merek, tahunKeluar}=mobil
console.log(merek);

let number1 = [5,6,7,8,9,10]

let gabungkanAngka = [...number,...number1]
console.log(gabungkanAngka)

function hitung(...number) {
    return number.reduce((nilaiAwal,nilaiAkhir)=> nilaiAwal *= nilaiAkhir)
}
console.log(hitung(4,2,45,5));
