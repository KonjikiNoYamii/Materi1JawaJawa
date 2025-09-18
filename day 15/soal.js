// soal 1
// function print() {
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("Operasi Berhasil")
//         },2000)
//     })
// }

// print()
// .then(hasil =>{
//     console.log(hasil);
// })

// // soal 2
// let sukses = true
// function proses(succes) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (succes === true) {
//                 resolve("Data berhasil diproses")
//             }else{
//                 reject("Operasi gagal")
//             }
//         },2000)
//     })
// }
// proses(sukses)
// .then(hasil =>{
//     console.log(hasil);
// })
// .catch(hasil1 =>{
//     console.log(hasil1);
// })

// soal 3
// function angka() {
//     return new Promise(resolve=>{
//         resolve(5)
//     })
// }

// angka()
// .then(hasil =>{
//     return hasil *2
// })
// .then(hasil1 =>{
//     return hasil1 + 10
// })
// .then(hasil2 =>{
//     console.log(`hasil nya adalah ${hasil2}`);
    
// })

// soal 4
// fetch("https://equran.id/api/v2/surat/114")
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
    
// })

// soal 5
fetch("https://equran.id/api/v2/surat/114")
.then(response =>{
    if (!response.ok) {
        throw new error("API gagal diambil")
    }
    return response.json()
})
.then(data =>{
    console.log(data);
    
})
.catch(error =>{
    console.error("terjadi error",error.message);
    
})

// // soal 6
// fetch("https://equran.id/api/v2/surat/114")
// .then(response =>{
//     if (!response.ok) {
//         throw new error("API gagal diambil")
//     }
//     return response.json()
// })
// .then(data =>{
//     console.log(data);
    
// })
// .catch(error =>{
//     console.error("terjadi error",error.message);
    
// })
// .finally(() =>{
//     console.log("Proses selesai,apapun hasilnya");
    
// })

// soal 7
// const link1 = fetch("https://api.myquran.com/v2/husna/semua")
// const link2 = fetch("https://api.myquran.com/v2/hadits/arbain/semua")

// Promise.race([link1, link2])
// .then(hasil =>{
//     console.log("Pemenang",hasil);
// })
// .catch(error =>{
//     console.error("error",error);
    
// })

// soal 8
// const api1 = fetch("https://api.myquran.com/v2/quran/surat/semua");
// const api2 = fetch("https://api.myquran.com/v2/husna/semua");
// const api3 = fetch("https://api.myquran.com/v2/husna/salah"); // sengaja salah

// Promise.allSettled([api1, api2, api3])
//   .then(results => {
//     results.forEach((result) => {
//       if (result.status === "fulfilled") {
//         console.log("Berhasil:", result.value);
//       } else {
//         console.log("Gagal:", result.reason);
//       }
//     });
//   });

  // soal 9
// const data1 = fetch("https://api.myquran.com/v2/quran/surat/semua");
// const data2 = fetch("https://api.myquran.com/v2/hadits/arbain/semua")
// const data3 = fetch("https://api.myquran.com/v2/husna/semua");
// Promise.all([data1,data2,data3])
// .then(([api1,api2,api3]) => {
//     return Promise.all([api1.json(),api2.json(),api3.json()])
// })
// .then(([surat,arbain,asmaulHusna])=>{
//     console.log("Dashboard sipa !");
//     console.log("API surat", surat);
//     console.log("API arbain",arbain);
//     console.log("API asmaul husna",asmaulHusna);
// })
// .catch(error =>{
//     console.log("gagal memuat dashboard");
    
// })

// soal 10
function versiTimeout() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(("Timeout: API terlalu lama"))
        }, 5000);
    })
}
const dataa = fetch("https://equran.id/api/v2/surat/1")
.then(data =>{
    return data.json()
})
return Promise.race([versiTimeout(),dataa])
.then(dataaa =>{
    console.log(dataaa);
    
})
.catch(error =>{
    console.log(error.message);
    
})