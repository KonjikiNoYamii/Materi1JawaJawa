// platform/kursus.js
export const buatKursus = (judul) => ({ id: Date.now(), judul });

export function enrollSiswa(siswa, kursus) {
  return { ...siswa, kursus: [...siswa.kursus, kursus.judul] };
}
