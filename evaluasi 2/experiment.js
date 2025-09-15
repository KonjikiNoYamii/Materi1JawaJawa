const absensi = {
  data: [],
  kehadiranHariIni: [],
  tidakHadir: [],
  addSiswa: function (...namaSiswa) {
    namaSiswa.forEach((item) => {
      if (item) {
        const nama = {
          nama: item
        };
        this.data.push(nama);
        console.log(`✅ ${item} ditambahkan`);
      }
    });
  },
  cekKehadiran: function () {
    this.data.forEach(item => {
        const{nama} = item
        console.log(`${nama} hadir`)
    })
}
}

absensi.addSiswa("ucup", "zidan", "zaktor");
absensi.cekKehadiran();
