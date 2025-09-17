// contoh Json
const istriPertama = `{
    "nama" : "Yami",
    "umur" : 28,
    "Menikah": true,
    "Tempat_TInggal": ["JL.Emilia","Blok.isekai"],
    "Kesukaan":{
        "Orang": ["suami","anak"],
        "makanan": "Taiyaki"
    },
    "rahasia": null
}`

console.log(istriPertama);

// contoh stringify
const istriKedua = {nama: "Yue", umur: 300}
const rubahKeJson = JSON.stringify(istriKedua)



// try catch untuk handle error
try {
    const parseJson = JSON.parse(istriPertama)// UBAH KE OBJECT
    console.log(parseJson); 
    console.log(parseJson.nama);
    console.log(parseJson.umur);
} catch (error) {
    console.log("Error woy cek nama",error.message);
    
}
console.log(rubahKeJson);

fetch()


