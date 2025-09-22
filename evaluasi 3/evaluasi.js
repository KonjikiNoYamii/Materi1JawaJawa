// // // soal 1
// // const barang ={ nama: "Buku", harga: 10000 }
// // ubahBarang = JSON.stringify(barang)
// // console.log(ubahBarang);

// // // soal 2
// // let panjang = 20
// // let lebar = 20
// // function hitungLuas(pnjg,lbr,callback) {
// //     let hasil = pnjg * lbr
// //     callback(hasil)
// // }
// // function hitungLuas2(hasil) {
// //     console.log(hasil);
    
// // }
// // hitungLuas(panjang,lebar,hitungLuas2);

// // // soal 3
// //     fetch("https://jsonplaceholder.typicode.com/users")
// // .then(response =>{
// //     return response.json()
// // })
// // .then(data =>{
// //     console.log(data);
    
// // })

// // // soal 4
// // const nama = `{"nama":"Andi","umur":20}`;
// // const ubahNama = JSON.parse(nama)
// // console.log(ubahNama.nama);

// // soal 5
// function sayHello(callback) {
//         callback()
// }
// sayHello(function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Halo")
//             )
//         }, 2000);
//     })
// })

// // soal 6
// // function printJudul() {
// //     let judul = document.getElementById("judul")
// //     judul.innerHTML = "Belajar DOM selection"
// // }
// // printJudul()

// // soal 7
// function sayHello1(callback) {
//         callback()
// }
// sayHello1(function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Data berhasil diambil")
//             )
//         }, 3000);
//     })
// })

// // soal 8
// function login() {
//     return new Promise((resolve, reject) => {
//         resolve("Login user")
//     })
// }
// login().then(data =>{
//     console.log(data);
    
// })
// .then(() =>{
//     console.log("ambil data");
    
// })
// .then(() =>{
//     console.log("tampilkan dasboard");
    
// })

// // soal 9
// // const p = document.querySelectorAll(".p")
// //     p.forEach(item => {
// //         item.style.color = "blue"
// //     })

// // soal 10
// function bagi(a,b) {
//     try {
//         const hasil = a / b
//         if (b === 0) {
//             throw new Error("tidak bisa dibagi dengan 0")
//         }else{
//             return hasil

//         }
//     } catch (error) {
//         console.error(error.message)
        
        
//     }
// }
// bagi(1,0)

// // soal 12
// async function ambilUser(id) {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         if (!res.ok) {
//             throw new Error("ID tidak ditemukan")
//         }
//         const data = res.json()
//         console.log(data);
        
//     } catch (error) {
//         console.error(error.message);
        
//     }

// }
// ambilUser("a")

// // soal 13
// let angka =[1,2,3,4,5]
// function kuadrat(angkaa,callback) {
//     callback(angkaa)
// }
// kuadrat(angka,function (angka) {
//     angka.map(item =>{
//         console.log(item * item);
        
//     })
// })

// // 14
// async function apiKosong() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/post")
//         if (!res.ok) {
//            throw new Error("API tidak ditemukan!") 
//         }else{
//             res.json()
//             console.log(res);
//         }
//     } catch (error) {
//         console.error(error.message);
        
//     }
// }
// apiKosong()

// // soal 15

//     let siswa = `{"nama":"Yami", "status":"unactive"}`
//     let ubahSiswa = JSON.parse(siswa)
//     ubahSiswa.status = "active"
//     let ubahLagi = JSON.stringify(ubahSiswa)

// console.log(ubahLagi);


// // soal 16
// let produk = {barang : "laptop", stok: 2}
// function getProduk(produk) {
//     return new Promise((resolve, reject) => {
//         if (produk.stok > 0) {
//             resolve("Produk tersedia")
//         } else {
//             reject("Produk habis")
//         }
//     })
// }
// getProduk(produk)
// .then(data =>{
//     console.log(data);
    
// })
// .catch(error=>{
//     console.log(error);
    
// })

// soal 17
// const banner = document.getElementById("banner")
// banner.setAttribute("src", "/image(1).png")
// banner.style.width ="300px"

// soal 18
// function prosesData() {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("Connectb database")
//         }, 1000);
    
//     })
// }
// prosesData()
// .then((data) =>{
//     console.log(data);
// })
// .then(() =>{
//    setTimeout(() => {
//     console.log("Ambil data produk");
    
//    }, 2000);
    
// })
// .then(() =>{
//     setTimeout(() => {
//         console.log("Tampilkan data");
        
//     }, 3000);
    
// })

// soal 20
// function userLogin() {
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("Login")
//             setTimeout(() => {
//                 console.log("ambil data")
//                 setTimeout(() => {
//                     console.log("Tampilkan data")
//                 }, 3000);
//             }, 2000);
//         }, 1000);
//     })
// }
// userLogin()
// .then((data) =>{
//     console.log(data);
    
// })

// soal 21
// async function email() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/comments")

//         const data = await res.json()
//             const hasil = data.filter(c =>c.email.includes("@")) // jika menggunakan @gmail.com maka akan undfined karena di API nya tidak ada nama begitu
//         console.log(hasil);
        
//     } catch (error) {
//         console.error(error);
        
//     }

// }
// email()

// soal 22
// const dataData = [3474523,348792] 
// async function prosesData(data) {
//     try {
//         if (data === null || undefined) {
//             throw new Error("data tidak boleh kosong")
//         } else {
//             console.log(data);
            
//         }
//     } catch (error) {
//         console.error(error.message);
        
//     }
// }
// prosesData(dataData)

// // soal 23
// const card = document.querySelectorAll(".card")

// card.forEach(item =>{
//     item.style.backgroundColor = item.style.backgroundColor = "red"
//     item.innerText = item.innerText = "merahhhh"
//     item.style.border = item.style.border ="solid 10px black"
// })

// soal 24
// let suratSurat = document.querySelectorAll(".suratSurat")
// let li = document.querySelectorAll("li")

// fetch("https://equran.id/api/v2/surat")
// .then(item =>
//     item.json()
// )
// .then(item =>{
//     item.data.forEach((surat,idx) => {
//         const hasil = suratSurat[idx].innerHTML = `<li>${surat.namaLatin}</li>`
//         return hasil
//     });
// })

// soal 25
// async function todoList() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//         const data = await res.json()
//         const hasil = data.filter(todo =>
//             todo.completed).length
        
//         console.log(hasil);
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// todoList()
