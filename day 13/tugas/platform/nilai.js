// platform/nilai.js
export function beriNilai(siswa, kursus, nilai) {
  return {
    ...siswa,
    nilai: [...siswa.nilai, { kursus: kursus.judul, nilai }]
  };
}

export default function reportNilai(siswa) {
  return `📘 Report ${siswa.nama}\n` +
    siswa.nilai.map(n => `- ${n.kursus}: ${n.nilai}`).join("\n");
}
