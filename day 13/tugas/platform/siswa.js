// platform/siswa.js
export default function buatSiswa(nama) {
  return { id: Date.now(), nama, kursus: [], nilai: [] };
}

export const haloSiswa = (siswa) => `Halo ${siswa.nama}, selamat datang!`;
