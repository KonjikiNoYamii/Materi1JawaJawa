const absensi = {
  data: [], // untuk menampung data dari fungsi addsiswa dan tempat dimana cekhadiran akan mengambil data
  addSiswa: function (...namaSiswa) { // di spread karena akan menampung banyak data
    namaSiswa.forEach((item) => { // iterasi agar secara otomatis ditambahkan
      if (item) {
        const nama = {
          nama: item
        };
        this.data.push(nama); // input yang dimasukan akan dikirim ke data
        console.log(`✅ ${item} ditambahkan`); // tanda nama sudah ditambahkan
      }
    });
  },
  cekKehadiran: function () { // untuk mengecek data 
    this.data.forEach(item => { // dilakukan perulangan agar otomatis mengcek data nama yg ada
        const{nama} = item // secara spesifik mengambil data.nama dan dirunah menjadi params nya item
        console.log(`${nama} hadir`)
    })
}
}

absensi.addSiswa("ucup", "zidan", "zaktor");
absensi.cekKehadiran();
