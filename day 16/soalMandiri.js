// const produk = {nama: "Laptop", harga: 2000000}  
// function getProduct(product) {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(produk)
//         }, 2000);
//     })
// }

// async function showProduct() {
//     const barang = await getProduct(produk);
//     console.log(barang);
    
// }

// showProduct()

async function dataFetch() {
    try {
        const api1 = await fetch("https://api.myquran.com/v2/quran/surat/semua")
        const dataApi = await api1.json()
        console.log(dataApi);
        
    } catch (error) {
        console.error("Ada error", error);
        
    }
}
dataFetch()