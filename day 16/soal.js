// // soal 1
// async function helloAsync() {
//     console.log("Halo dari async")
// }
// helloAsync()

// // soal 2
// function ambilData() {
//     return new Promise(resolve =>{
//         setTimeout(() => {
//            resolve("Data berhasil diambil") 
//         }, 2000);
//     })
// }
// async function print() {
//     const hasil = await ambilData()
//     console.log(hasil);
// }
// print()

// // soal 3
// async function getNumber() {
//     return 42
// }
// async function print1() {
//     const hasil = await getNumber()
//     console.log(hasil);
    
// }
// print1()

// // soal 4
// function tambahLima(x) {
//     return new Promise((resolve)=>{
//         resolve(x + 5)
//     })
// }
// async function main() {
//     const hasil = await tambahLima(10)
//     console.log(hasil);
// }
// main()

// soal 5
// async function throwError() {
//     throw new Error("terjadi kesalahan");
// }

// async function main() {
//     try {
//         await throwError()
//     } catch (error) {
//         console.error(error);
//     }
// }
// // main()

// soal 6
// async function printLatin() {
//     try {
//         const api = await fetch("https://equran.id/api/v2/surat/1")
//         const dataApi = await api.json()
//         console.log(dataApi.data.namaLatin);
        
//     } catch (error) {
//      console.error("data error",error);
        
//     }
// }
// printLatin()

// soal 7
// async function printLatin() {
//     try {
//         const api = await fetch("https://equran.id/api/v2/surat/1")
//         if (!api.ok) {
//             throw new Error("gagal mengambil data");
//         }
//         const dataApi = await api.json()
//         console.log(dataApi.data.namaLatin);
        
//     } catch (error) {
//      console.error(error);
        
//     }
// }
// printLatin()

// soal 8
// async function printLatin() {
//     try {
//         const api = await fetch("https://equran.id/api/v2/surat/1")
//         if (!api.ok) {
//             throw new Error("gagal mengambil data");
//         }
//         const dataApi = await api.json()
//         console.log(dataApi.data.namaLatin);
        
//     } catch (error) {
//      console.error(error);
        
//     }
//     finally{
//         console.log("Proses selesai");
        
//     }
// }
// printLatin()

// soal 9
// async function printLatin() {
//     try {
//         const api = await fetch("https://equran.id/api/v2/tafsir/112")
//         if (!api.ok) {
//             throw new Error("gagal mengambil data");
//         }
//         const dataApi = await api.json()

//         dataApi.data.tafsir.forEach(item => {
//             console.log(`ayat ${item.ayat}: ${item.teks}`);
//         });
        
//     } catch (error) {
//      console.error(error.message);
        
//     }
//     finally{
//         console.log("Proses selesai");
        
//     }
// }
// printLatin()

// soal 10
// async function printLatin() {
//     try {
//         const api = await fetch("https://equran.id/api/v2/tafsir/115")
//         if (!api.ok) {
//             throw new Error("gagal mengambil data");
//         }
//         const dataApi = await api.json()

//         dataApi.data.tafsir.forEach(item => {
//             console.log(`ayat ${item.ayat}: ${item.teks}`);
//         });
        
//     } catch (error) {
//      console.error(error.message);
        
//     }
//     finally{
//         console.log("Proses selesai");
        
//     }
// }
// printLatin()

// // soal 11
// async function namaLatin2() {
//     try {
//         const [api1, api2] = await Promise.all([
//             fetch("https://equran.id/api/v2/surat/1"),
//             fetch("https://equran.id/api/v2/surat/112")
//         ])
//         const data1 = await api1.json()
//         const data2 = await api2.json()
//         console.log(data1.data.namaLatin);
//         console.log(data2.data.namaLatin);
//     } catch (error) {
//         console.error("data eror");
        
//     }
// }
// namaLatin2()

// soal 12
// function kuda1() {
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("dalam 1 detik")
//         },1000);
//     })
// }
// function kuda2() {
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("dalam 3 detik")
//         }, 3000);   
//     })
// }
// async function hasilBalap() {
//     try {
//         const hasil = await Promise.race([kuda1(), kuda2()])
//         console.log("Pemenang ", hasil);
        
//     } catch (error) {
//         console.error("data error", error);
        
//     }
// }
// hasilBalap()

// soal 13
function succes1() {
    return Promise.resolve("data 1") // diperbolehkan langsung menggunakn resolve ataupun reject jika memang sudah pasti memebri output apa
}
function succes2() {
    return Promise.resolve("data 2")
}
function reject1() {
    return Promise.reject("Error 3")
}

async function printAll() {
    const hasil = await Promise.allSettled([succes1(),succes2(),reject1()])
    hasil.forEach((item) =>{
        console.log(item.status,item.value || item.reason); // status untuk memberi output seperti fullfilled dan rejected
                                                            // value untuk memberi output value tentunnya
                                                            // reason untuk memberi output error

        
    })
}
printAll()

// soal 14
async function printData() {
    try {     // destrucing
        const [api1,api2,api3] = await Promise.all([
        fetch("https://api.myquran.com/v2/quran/surat/semua"),
        fetch("https://api.myquran.com/v2/husna/semua"),
        fetch("https://api.myquran.com/v2/hadits/arbain/semua")
    ])
    const [surat,asmaulHusna,arbain] = await Promise.all([ // data API harus dirbuah ke JSON dulu
        api1.json(),
        api2.json(),
        api3.json()
    ])
    console.log(surat.data.length);
    console.log(asmaulHusna.data.length);
    console.log(arbain.data.length)
    } catch (error) {
        console.error("Benerin error woy",error);
        
    }
}
printData()

// soal 15
async function fetchSurat(id) {
  try {
    // Validasi apakah id angka
    if (isNaN(id)) {
      throw new Error("ID surat harus angka");
    }
    const response = await fetch(`https://equran.id/api/v2/surat/${id}`);

    if (!response.ok) {
      throw new Error("Gagal mengambil data surat");
    }

    const data = await response.json();
    console.log("Nama Surat:", data.data.namaLatin);

  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  }
}
fetchSurat("a"); 
