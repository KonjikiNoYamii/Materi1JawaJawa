const menuMakanan = {
  data: [],
  nextId: 1,
  tambahBanyak: function (...makanan) {
    console.log(`akan menambah ✅  ${makanan.length} makanan`);

    makanan.forEach((item) => {
      if (item) {
        const menu = {
          id: this.nextId++,
          nama: item.nama,
          harga: item.harga,
          tersedia: true,
        };
        this.data.push(menu);
        console.log(`✅ ${item.nama} ditambahkan`);
      }
    });
  },
  lihat: function () {
    console.log("=== M E N U   M A K A N A N ===");

    if (this.data.length === 0) {
      console.log("Tidak ada makanan");
      return;
    }
    this.data.forEach((item, idx) => {
      const { id, nama, harga, tersedia } = item;
      const status = tersedia ? tersedia : habis;
      console.log(`${idx + 1}. [${id}] ${nama} - ${harga} ✅ tersediaa`);
    });
  },
  editHarga: function (updateData) {
    const index = this.data.findIndex((item) => item.id === updateData.id);

    if (index === -1) {
      console.log(`menu makanan ${id} tidak ada`);
      return;
    }
    this.data[index] = {
      ...this.data[index],
      harga: updateData.harga,
    };
    console.log(`Harga menu [ID ${updateData.id}] ✅ berhasil di update`);
  },
  hapusBanyak: function (...ids) {
    const penumbalan = [];

    ids.forEach((id) => {
      const index = this.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const { nama } = this.data[index];
        this.data.splice(index, 1);
        penumbalan.push(nama);
      }
    });
    console.log(`${penumbalan} ✅ berhasil sudah dihapus`);
  },
  
  salinMenu: function (...pilihId) {
    if (pilihId.length === 0) {
      return [...this.data];
    }
    const yangTerpilih = this.data.filter((item) => pilihId.includes(item.id));
    return [...yangTerpilih];
  },
};

console.log("🚀 TESTING MENU MAKANAN");

// 1. REST OPERATOR: tambah banyak makanan sekaligus
menuMakanan.tambahBanyak(
  { nama: "Nasi Goreng", harga: 25000 },
  { nama: "Mie Ayam", harga: 20000 },
  { nama: "Es Teh", harga: 5000 },
  { nama: "Ayam Bakar", harga: 35000 }
);

// 2. DESTRUCTURING: lihat semua
menuMakanan.lihat();

// 3. SPREAD OPERATOR: edit harga
menuMakanan.editHarga({ id: 1, harga: 28000 });

menuMakanan.editHarga({ id: 3, harga: 6000 });

// 4. REST + DESTRUCTURING: hapus banyak
menuMakanan.hapusBanyak(2);

menuMakanan.hapusBanyak(4);

// 5. Lihat hasil akhir
menuMakanan.lihat();

// 6. SPREAD: salin menu
const menuBackup = menuMakanan.salinMenu(); // copy semua

const menuPilihan = menuMakanan.salinMenu(1, 3); // copy ID 1 dan 3

console.log("Backup semua menu:", menuBackup);

console.log("Menu pilihan:", menuPilihan);
