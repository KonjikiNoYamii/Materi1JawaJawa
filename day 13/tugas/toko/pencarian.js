export let produk = [
    {nama: "Laptop", harga: 15000000},
    {nama: "Smartphone", harga: 2000000}
]

export function cariProduk(produk, keyword) {
    return produk.find(item => item.nama.toLowerCase().includes(keyword.toLowerCase()))
};