let siswa = [
    {nama : "Yami", nilai: 100, jurusan: "IPA"},
    {nama : "Yue", nilai: 70, jurusan: "IPA"},
    {nama : "Shinoa", nilai: 50, jurusan: "IPS"},
    {nama : "Atri", nilai: 85, jurusan: "IPA"},
    {nama : "Silica", nilai: 0, jurusan: "IPS"},
    {nama : "Victorique", nilai: 75, jurusan: "IPA"},
    {nama : "Maybell", nilai: 100, jurusan: "IPS"}
]

let filterJurusan = siswa.filter(item => item.jurusan === "IPA")
console.log(filterJurusan);

const KKM = 80
let filterNilai = filterJurusan.map(item => {
    if (item.nilai >= KKM) {
        return item
    }else{
        return `Anda tidak lulus ${item.nama}`
    }
})
console.log(filterNilai);

let ambilNilaiSeluruhSiswa = siswa.map(item => item.nilai)
let totalNilaiSiswa = ambilNilaiSeluruhSiswa.reduce((nilaiAwal,nilaiAkhir) => nilaiAwal + nilaiAkhir)
let hitungRataRata = totalNilaiSiswa / siswa.length
console.log(hitungRataRata.toFixed(2));


