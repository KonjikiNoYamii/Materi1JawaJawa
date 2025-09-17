export let produk1 =[
    {nama: "Keyboard", harga: 300000},
    {nama: "Laptop", harga: 5000000},
    {nama: "Permen", harga: 500},
    {nama: "Kopi", harga: 70000}
]
export function proses(produk) {
    return produk.sort(function(a,b) {
        return a.harga - b.harga
    })
}

