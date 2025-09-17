const buku = {
        judul:["Habis gelap terbitlah terang","10 dosa besar soeharto","Ayat-ayat kiri"],
        pengarang: ["R.A Kartini","Liotohe, wimanjaya K","Karl marx"],
        halaman: [270,1000,150],
        hitungJumlah: function() {
            this.judul.forEach((item,index) => {
                console.log(`buku ke ${index+ 1}: ${item}`);
            });
        },
        cariBuku: function(cariBuku) {
            let hasil = this.judul.find(item => item === cariBuku)
            console.log(`buku ${hasil} ditemukan !!`);
            
        },
        bukuTebal: function (cariBuku) {
            let idx = this.judul.findIndex(item => item === cariBuku)
            if (idx !== -1) {
                console.log(`buku ${this.judul[idx]} dengan ${this.halaman[idx]} halaman`);
            }else{
                console.log(`Buku tidak ditemukan`);
            }
        }
}
export default buku;