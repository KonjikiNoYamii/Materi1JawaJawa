let angka = [1,2,3,4,5,6]
let hasil = angka.reduce((nilaiAwal,nilaiAkhir) =>{
    return nilaiAwal + nilaiAkhir
})
console.log(hasil);


// cukup menggunakan tanda kuurng bulat bukan scope
// mencari angka berdasarkan perbandingan
let angka1 = [2,3,5,3,5,4,67,8]
let cariAngka = angka1.find((item) => item > 60) 
console.log(cariAngka);

// mencari huruf berdasarkan index(?)
let huruf = ["A","Be","Cee","Deee"]
let cariHuruf = huruf.find((item) => item.length > 3)
console.log(cariHuruf);

// bisa juga : 
// let cariAngka = angka1.find((item) => item === 67) 
// bisa menggunakan operator == jika spesifik tapi wadah sementaranya(item) tidak boleh menggunakan .length

let huruf1 = ["nama","namaa","namaaa"]
let klasifikasihuruf = huruf1.some((item) => item.length >= 6) //jika perbandingan nya 7 maka akan false
console.log(klasifikasihuruf);
