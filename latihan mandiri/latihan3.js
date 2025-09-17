let siswa = {
    nama: "Budi",
    kelas: "12 IPA",
    nilai: {
        matematika: 85,
        bahasa: 90,
        fisika: 78
    }
};

for(let key in siswa){
    console.log(key,siswa[key]);
    
}

let toko = {
    nama: "Toko Sejahtera",
    barang: ["beras", "gula", "kopi", "teh"]
};

for(let key in toko){
    console.log(key, toko[key]);
    
}
for(let value of toko.barang){
    console.log(value);
    
}
if(7 % 2 === 1){
    console.log(`ini adalah angka ganjil`);
    
}else{
    console.log(`bukan angka ganjil`);
    
}

for(let i = 0; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(i);
    }else{
        console.log("ini ganjil");
        
    }
}
for(let i = 0; i < 6; i++){
    let tumbal = ""
    for(let j = 0; j < i; j++){
        tumbal += "*"
    }
    console.log(tumbal);
     
}

for(let i = 1; i <= 5; i++){
    for(let j =1; j <= 5;j++){
        console.log(`${i} x ${j} = ${ i * j}`);
        
    }
}

for(let i = 1; i <= 5; i++){
    let tumbal = ""
    for(let j = 1; j <= i; j++){
        tumbal += j
    }
    console.log(tumbal);
    
}

function bagi(a,b=2) { //parameter bisa langsung diisi seperti params b yg langsung diisi 2
    return a/b
}
console.log(bagi(10));

function gabungKata(...kata) {
    return kata.join(" ")
}
console.log(gabungKata("saya","suka","Yami"));

function hitung(angka,callback) {
    return callback(angka)
}
let hasil = hitung(5,(x)=> x * 2)
console.log(hasil);


let angka = [5, 10, 15, 20, 25]
let angkaBagi = angka.map(item => item / 5)
console.log(angkaBagi);

let filterAngka = angka.filter(item => item >= 10)
console.log(filterAngka);

let totalAngka = angka.reduce((naw,nak) => naw + nak,0)
console.log(totalAngka);

const siswa1 = [
  { nama: "Andi", nilai: [80, 75, 90], umur: 17 },
  { nama: "Budi", nilai: [60, 65, 70], umur: 18 },
  { nama: "Cici", nilai: [95, 90, 93], umur: 17 },
  { nama: "Deni", nilai: [50, 55, 60], umur: 19 },
  { nama: "Eka",  nilai: [85, 88, 84], umur: 18 }
];

let namaSiswa = siswa1.map(item => item.nama)
console.log(namaSiswa);

let namaDanNilai = siswa1.map(({nama, nilai}) => {
    let total = nilai.reduce((naw,nak)=> naw + nak,0)
    let rataRata = total / nilai.length

    return {nama, rataRata}
})
let siswaLulus = namaDanNilai.filter(item => item.rataRata >= 70);
console.log(siswaLulus);

let cariCici = siswaLulus.find(item => item.nama === "Cici")
console.log(cariCici);

let hitungNilai = siswa1.flatMap(({nilai}) => nilai).reduce((naw,nak)=> naw + nak)
console.log(hitungNilai);

const siswa2 = {
    nama: "Yami",
    kelas: 12,
    nilai: [70,85,27,90],
    hitungRataRata: function() {
        let total = this.nilai.reduce((naw,nak)=> naw + nak,0)
        let rataRata = total / this.nilai.length
        console.log(`nama: ${this.nama} \n kelas : ${this.kelas} \n rata-rata :${rataRata}`)
        
}
}
siswa2.hitungRataRata();


const toko1 ={
    Nama: "Yami",
    Barang: [],
    tambahBarang: function(nama, harga) {
        const barangBarang = {nama,harga}
        this.Barang.push(barangBarang)
        console.log("barang ditambahkan");
         
    },
    hitungTotal: function() {
        let total = this.Barang.reduce((naw,nak)=> naw + nak.harga, 0)
        return total
    }
}
toko1.tambahBarang("Beras",5000)
toko1.tambahBarang("Gula",12000)
console.log(toko1.hitungTotal());
