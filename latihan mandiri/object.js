
let motor ={
    merk: "Yamaha",
    tahun:999,
    warna:"hytam",
    "fitur lainnya":{
        kulit : "buaya",
        "Bisa jalan di": "udara"
    }
}
for(let key in motor){
    console.log(motor[key]);
    
}

let hewan=[
    {nama: "Silica", hewan:"kucing"},   // array on object seperti ini bisa dipanggil 1 baris 
    {nama: "Doggy", hewan:"anjeng"}     //selama 1 kurung kurawal yang mana bisa dimanfaatkan saat iterasi unutk memanggil sekaligus nama dan jenis nya
]
let nyari = hewan.find((item) => item.nama === "Silica")
let nyari2 = hewan.find((item) => item.hewan === "anjeng")
console.log(nyari);
console.log(nyari2);

function mobil(merk,tahun) {
    this.merk = merk;
    this.tahun = tahun;
}

let mobil1 = new mobil("Forsche", 1950)

console.log(mobil1.merk);
console.log(mobil1.tahun);

class Siswa{
    constructor(nama){
        this.nama = nama;
    }

    sapa(){
        console.log("halo, aku " + this.nama);
        
    }
}

let siswa1 = new Siswa("Yami")
siswa1.sapa()

