let username = "Yami";

function login(user) {
  return new Promise((resolve, reject) => { // resolve jika benar
    console.log("Dalam proses");            // reject jika salah
    setTimeout(() => {                // sejauh ini tidak butuh parameter
      if (user === "Yami") {             //mengecek kondisi parameter sesuai dengan data
        resolve("Username benar"); // jika sesuai
      } else {
        reject("Username salah!!!");// jika tidak sesuai
      }
    }, 2000); // set timer
  });
}
login(username) // memanggil function 
.then((pesan) => { // then untuk kondisi benar/sesuai
  console.log(pesan); // output resolve dippangil dengan log
})
.catch((error) => { // catch jika kondisi salah/tidak sesuai
  console.error(error); // output reject dipanggil dengan log
})
.finally(()=>{ //pasti muncul
    console.log("Proses selesai"); 
});



let nama = "Atri"
function dataUser(dataNama) {
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve(`nama anda: ${dataNama}`)
    },3000)
  })
}

function sambutanUser(sapa) {
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve(`selamat datang ${sapa}`)
    },4000)
  })
}

dataUser(nama)
.then(munculNama =>{
  console.log("==============================================================================");
  console.log(munculNama)
  return sambutanUser(nama)
})
.then(sapaan =>{
  console.log("     *");
  console.log("     *");
  console.log("     *");
  console.log("     *");
  console.log(sapaan);
  
})
.finally(()=>{
  console.log("Done ✅");
  
})


// let username2 = "Yam"
// function login(user) {
//   return new Promise((resolve, reject) => { // resolve jika benar
//     console.log("Dalam proses");            // reject jika salah
//     setTimeout(() => {                // sejauh ini tidak butuh parameter
//       if (user === "Yami") {             //mengecek kondisi parameter sesuai dengan data
//         resolve("Username benar"); // jika sesuai
//       } else {
//         reject("Username salah!!!");// jika tidak sesuai
//       }
//     }, 2000); // set timer
//   });
// }
// login(username2) // memanggil function 
// .then((pesan) => { // then untuk kondisi benar/sesuai
//   console.log(pesan); // output resolve dippangil dengan log
// })
// .catch((error) => { // catch jika kondisi salah/tidak sesuai
//   console.error(error); // output reject dipanggil dengan log
// })
// .finally(()=>{ //pasti muncul
//     console.log("Proses selesai"); 
// });

