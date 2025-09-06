// let santri = ["Hadir","Alpa","Izin","Hadir","Hadir"]
// let hadirArr = []
// let izinArr = []
// let alpaArr = []

// function hitungAbsensi(absensiArr) {
//     do{
//         if (absensiArr == "Hadir")
//             absensiArr.push(hadirArr)
//         else if (absensiArr == "Izin")
//             absensiArr.push(izinArr)
//         else if (absensiArr == "Alpa")
//             absensiArr.push(alpaArr)
//         }
//     while(false)

// };
// hitungAbsensi(santri)

// console.log(hadirArr)
// console.log(izinArr)
// console.log(alpaArr)
function hitungAbsensi(absensiArr) {
  let izin = 0;
  let alpa = 0;
  let hadir = 0;
  for (let i = 0; i < absensiArr.length; i++) {
    if (absensiArr[i] === "Hadir") {
      hadir += 1;
    } else if (absensiArr[i] === "Alpa") {
      alpa += 1;
    } else if (absensiArr[i] === "Izin") {
      izin += 1;
    }
  }

  return `Hadir ${hadir} Izin ${izin} Alpa ${alpa}`;
}
console.log(hitungAbsensi(["Hadir", "Alpa", "Izin", "Hadir", "Hadir"]));
// console.log(hitungAbsensi(["Hadir","Hadir", "Hadir"]));

// let i = 1
// do {
//     console.log("Hello");

//     i++;
// }
// while (i <= 5)

// const data =["Hadir", "Alpa", "Izin", "Hadir", "Hadir"]
// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
// console.log(data[4]);

//soal 2
function laporanKelulusan(namaArr, nilaiArr) {
  if (!Array.isArray(namaArr) || !Array.isArray(nilaiArr)) {
    console.log("Ini bukan data Array");
  } else if (namaArr.length == nilaiArr.length) {
    for (let i = 0; i < namaArr.length; i++) {
      let hasil = "";
      hasil = nilaiArr[i] > 70 ? "Lulus" : "Tidak Lulus";
      console.log(`${namaArr[i]}: ${hasil} ${nilaiArr[i]}`);
    }
  }
}
laporanKelulusan(["Ali", "Budi", "Cici"], ["78", "55", "95"]);

// soal 3
analisaHafalan([10, 8, 14, 15, 12]);
function analisaHafalan(hafalanArr) {
  let i = 0;
  let hafalan = "";
  let total = 0;
  while (i < hafalanArr.length) {
    if (parseInt(hafalanArr[i])) {
    }

    let nilai = hafalanArr[i];
    total += nilai;

    if (nilai <= 8) {
      hafalan = "perlu usaha";
    } else if (nilai <= 10) {
      hafalan = "cukup";
    } else {
      hafalan = "sangat cukup";
    }
    total;
    console.log(`Minggu ke-${i + 1}: ${nilai} ayat ${hafalan}`);

    i++;
  }
  let rataRata = total / hafalanArr.length;
  console.log(`Rata-rata hafalan: ${rataRata.toFixed(1)}`);

  switch (hafalan) {
    case "cukup":
      console.log("cukup");
      break;
    case "perlu Usaha":
      console.log("perlu usaha");
      break;
    case "sangat cukup":
      console.log("sangat cukup");
      break;
    default:
      console.log("data tidak valid");
  }
}
// soal 4
rekapUsia([11, 16, 22]);
function rekapUsia(usiaArr) {
  let i = 0;
  let kategori =" ";
  do {
    if (usiaArr[i] < 0) {
    }
    i++;
  } while (i < usiaArr.length);
  let hasil = [];

  for (let j = 0; j < usiaArr.length; j++) {
    let usia = usiaArr[j];

    switch (true) {
      case usia === 11:
        kategori = "Anak-anak";
        break;
      case usia === 16:
        kategori = "Remaja";
        break;
      case usia === 22:
        kategori = "Dewasa";
        break;
      default:
        break;  
    }
    hasil.push(`santri ${j + 1} ${kategori} usia ${usia}`);
  }
  hasil.forEach((item) => console.log(item));
  hasil.join(", ");
  return `${hasil}`
}
// soal 5
daftarSalam(["Imam", "Maya", "Rafi"]);
function daftarSalam(namaArr) {
  for (let i = 0; i < namaArr.length; i++) {
    let salam = "Assalamualaikum";
    console.log(`${salam} ${namaArr[i]}`);
  }
}

// soal 6
let nama = ["Wahyu", "Dina", "Umar"];
let nilai = [92, 65, 88];
let batas = 80;
function filterNilai(namaArr, nilaiArr, batas) {
  while (!Array.isArray(namaArr) || !Array.isArray(nilaiArr)) {
    return "Ini bukan data Array";
  }
  let lulus = [];
  for (let i = 0; i < namaArr.length; i++) {
    let status;

    if (nilaiArr[i] > batas) {
      status = "lulus";
      lulus.push(namaArr[i]);
    } else {
      status = "belum lulus";
    }
    switch (status) {
      case "lulus":
        console.log(`${namaArr[i]} mendapatkan nilai diatas ${batas}`);
        break;

      case "belum lulus":
        console.log(`${namaArr[i]} mendapatkan nilai dibawah ${batas}`);
        break;
    }
  }
  return `${lulus.join(" & ")} mendapatkan nilai di atas ${batas}`;
}
console.log(filterNilai(nama, nilai, batas));

// soal 7

function rekapKegiatan(kegiatanArr) {
  let i = 0;
  let coding = 0;
  let ngaji = 0;
  let sholat = 0;
  do {
    if (kegiatanArr[i] == "Coding") {
      coding++;
    } else if (kegiatanArr[i] == "Ngaji") {
      ngaji++;
    } else {
      sholat++;
    }
    i++;
  } while (i < kegiatanArr.length);

  if (coding < kegiatanArr.length) {
    console.log(`Coding ${coding}`);
  }
  if (ngaji < kegiatanArr.length) {
    console.log(`Ngaji ${ngaji}`);
  }
  if (sholat < kegiatanArr.length) {
    console.log(`Sholat ${sholat}`);
  }
}
rekapKegiatan(["Coding", "Ngaji", "Coding", "Sholat", "Ngaji"]);

// soal 8
let statusMondok = ["Mukim", "Online", "Mukim"];
let namaSantri = ["Rini", "Ari", "Yusuf"];
function listSantri(statusArr, namaArr) {
  let mukim = [];
  let online = [];
  for (let i = 0; i < statusArr.length; i++) {
    if (statusArr[i] == "Mukim" || statusArr[i] == "Online") {
      switch (statusArr[i]) {
        case "Mukim":
          mukim.push(namaArr[i]);
          break;

        case "Online":
          online.push(namaArr[i]);
          break;
      }
    }
  }
  let santriMukim = mukim.join(", ");
  let santriOnline = online.join(", ");
  return `Santri Mukim: ${santriMukim} | Santri Online: ${santriOnline}`;
}
console.log(listSantri(statusMondok, namaSantri));

// soal 9
console.log(nilaiTertinggi(["Ana", "Udin", "Kiki"], [77, 95, 80]));
function nilaiTertinggi(namaArr, nilaiArr) {
  let i = 0;
  let maxNama = namaArr[0];
  let maxNilai = nilaiArr[0];

  while (i < namaArr.length && i < nilaiArr.length) {
    if (nilaiArr.length == namaArr.length) {
      console.log("panjang varibel sama");
    } else {
      console.log("panjang variabel tidak sama");
    }
    i++;
  }
  for (let j = 1; j < nilaiArr.length; j++){
    if (nilaiArr[j] > maxNilai) {
      maxNilai = nilaiArr[j];
      maxNama = namaArr[j]; 
    }
  }
  // nilaiArr.forEach((nilai) => {
  //   if (nilai > maxNilai) {
  //     maxNilai = nilai;

  //   }
  // });

  return `Nilai tertinggi ${maxNama}: ${maxNilai}`;
}

//soal 10
let NIS = ["123456", "765432", "1234"];
function filterNIS(nisArr) {
  let i = 0;
  let validNIS = [];
  let invalidNIS = [];
  do {
    if (nisArr[i].length >= 6) {
      switch (true) {
        case nisArr[i].length >= 6:
          validNIS.push(nisArr[i]);
          break;

        default:
          invalidNIS.push(nisArr[i]);
      }
    } else {
      invalidNIS.push(nisArr[i]);
    }
    i++;
  } while (i < nisArr.length);
  {
  }
  return `NIS valid: ${validNIS}; NIS invalid ${invalidNIS}`;
}
console.log(filterNIS(NIS));

// soal 11
let kegiatan =[2,3,4,1]
function totalKegiatan(partArr) {
  let i = 0
  do{
    if (partArr[i] < 1){
      console.log("Semua partisipasi harus > 1");
      
    }
    i++;
  }while (i < partArr.length);

  let total = 0
  let max = partArr[0]
  let min = partArr[0]

  partArr.forEach((part) =>{
    total += part
    if (part > max){
      max = part
    }
    if (part < min) {
      min = part
    }
    }
  );
  let rataRata = total / partArr.length
  return `Total partisipasi: ${total} rata-rata ${rataRata}/ hari, max ${max},min ${min}`

}
console.log(totalKegiatan(kegiatan));

// soal 12
let jamBelajar =[3,6,2,5]
function statJam(jamArr) {
  let i = 0
  do{
    if(jamArr[i] < 1){
      return "jam belajar dibawah 1 tidak bisa masuk"
    }
    i++;
  }while (i < jamArr.length) 
    let total = 0
    let min = jamArr[0]
    let max = jamArr[0]
    for(let j = 0; j < jamArr.length; j++){
      total += jamArr[j]
      if(jamArr[j] > max){
        max = jamArr[j]
      }
      if (jamArr[j] < min) {
        min = jamArr[j]
      }
    }
    let rataRata = total / jamArr.length
    return `jam belajar terbanyak adalah ${max}, tersedikit ${min}, terbanyak ${max}, rata-rata ${rataRata}`
}
console.log(statJam(jamBelajar));

// soal 13
let hafalan1 = [5,10,15,12]
function selisihHafalan(hafalanArr) {
  let i = 0
  do{
    if (i < hafalanArr.length) {
      console.log("Bila bisa diulang berarti ini adalah array")
    } i++;
  }while (i < hafalanArr.length);
    let hasil= []

    for(let j = 0; j < hafalanArr.length - 1;j++){
      let selisih = hafalanArr[j + 1] - hafalanArr[j]
      let status;
    
      switch (true) {
        case selisih > 0:
          status = `naik ${selisih}`
          break;
        case selisih < 0:
          status = `turun ${selisih}`
        default:
          status = `standar`
      }
      hasil.push(`minggu ke- ${j+1}-${j+2}: ${status}`);
    }
    return hasil.join(", ")
  }
  console.log("=============================================");
  
  console.log(selisihHafalan(hafalan1));
  
// soal 14
console.log(formatGuru(["Ahmad","Fatimah"], ["L","P"]));
function formatGuru(namaArr,genderArr) {
  let i = 0
  let hasil = []
 for (let j = 0; j < namaArr.length; j++) {
    let gelar;

    // Tentukan gelar berdasarkan nama
    switch(true) {
      case namaArr[j] === "Ahmad":
        gelar = "Ustadz";
        break;
      case namaArr[j] === "Fatimah":
        gelar = "Ustadzah";
        break;
    }

    hasil.push(`${gelar} ${namaArr[j]}`);
  }

  // Print tiap baris
  hasil.forEach(baris => console.log(baris));

  // Return gabungan
  return hasil.join(", ");
}

// soal 15
console.log(rekapTamat([28,30,35,30,29]));

function rekapTamat(khatamArr) {
  let i = 0
  do{
    if(!isFinite(khatamArr[i]) ){
      return `input harus number`
    }
    i++;
  } while (i < khatamArr.length);
  let tumbal = 0

  khatamArr.forEach(juz =>{
    if(juz >= 30){
      tumbal++;
    }
    switch (true) {
      case juz >= 30:
        return`santri telah khatam 30 juz`;
        break;
        case juz < 30:
        return`santri belum hafal 30 juz`;
        break;
        
    } 
  });return `${tumbal} santri telah hafal 30 juz`
}

// soal 16
function statusNilai(nilaiArr) {
  let i = 0
  do{
    if(!isFinite(nilaiArr[i]))
      return `Input harus angka`
    i++;
  }while (i > nilaiArr.length)
  let tumbal = []
  nilaiArr.forEach(nilai =>{
    let status1;
    switch (true) {
      case nilai >= 80:
        status1 = "baik"
        break;
      case nilai >= 60 && nilai <= 75:
        status1 = "cukub"
        break;
      case nilai >= 55:
        status1 = "kurang"
        break;    
    } tumbal.push(`${nilai}: ${status1}`)
  });
  return tumbal.join(", ")
}
console.log(statusNilai([80,60,75,55]));

// soal 17
function hariIzinSakit(statusArr) {
  let hasil = "Santri izin/sakit pada hari ke-"
  let hari = []
  for(let i = 0; i < statusArr.length; i++){
    if (statusArr[i] == "Izin" || statusArr[i] == "Sakit") {
      hari.push(i + 1);

    }
  }
  hasil += hari.join(",");
  return hasil;
}
console.log(hariIzinSakit(["Hadir","Izin","Sakit","Hadir","Izin"]));

// soal 18
console.log(validasiNIS(["123456","654321","54321"]));

function validasiNIS(nisArr) {
  let i = 0;
  let validNIS = [];
  let invalidNIS = [];
  do {
    if (nisArr[i].length == 6) {
      switch (true) {
        case nisArr[i].length == 6:
          validNIS.push(nisArr[i]);
          break;

        default:
          invalidNIS.push(nisArr[i]);
      }
    } else {
      invalidNIS.push(nisArr[i]);
    }
    i++;
  } while (i < nisArr.length);
  {
  }
  validNIS.join(",")
  invalidNIS.join("")
  return `NIS valid: ${validNIS}; NIS invalid ${invalidNIS}`;
}

// soal 19
console.log(kelompokKegiatan(["Sholat","Ngaji","Olahraga","Coding","Ngaji"]));

function kelompokKegiatan(arrKegiatan) {
  let ngaji = 0
  let sholat = 0
  let olahraga = 0
  let coding = 0
  for(let i = 0 ; i < arrKegiatan.length; i++){
    switch (true) {
      case arrKegiatan[i] == "Ngaji":
        ngaji++
        break;
      case arrKegiatan[i] == "Sholat":
        sholat++
        break;
      case arrKegiatan[i] == "Olahraga":
        olahraga++
        break;
      case arrKegiatan[i] == "Coding":
        coding++
        break;  
    }
  }
  return `ngaji ${ngaji}, sholat ${sholat}, olahraga ${olahraga}, coding ${coding}`
}

// soal 20
console.log(angkaSeringMuncul([1,2,2,3,1,2]));

function angkaSeringMuncul(angkaArr) {
  let frekuensi = {}; // 1. tempat menyimpan frekuensi: key = angka, value = jumlah kemunculan

  // 2. hitung frekuensi dengan for
  for (let i = 0; i < angkaArr.length; i++) {
    let angka = angkaArr[i];
    if (frekuensi[angka] === undefined) {
      frekuensi[angka] = 1;
    } else {
      frekuensi[angka]++;
    }
  }

  // 3. cari frekuensi maksimum dengan for
  let maxFreq = 0;
  let angkaMax = []; // menampung angka yang memiliki frekuensi tertinggi (bisa lebih dari 1)
  let keys = Object.keys(frekuensi); // daftar angka (sebagai string)

  for (let i = 0; i < keys.length; i++) {
    let angka = keys[i];
    let count = frekuensi[angka];

    if (count > maxFreq) {
      maxFreq = count;
      angkaMax = [angka];
    } else if (count === maxFreq) {
      angkaMax.push(angka);
    }
  }

  // 4. gunakan switch untuk menangani 3 kemungkinan output
  switch (true) {
    case angkaMax.length === 1:
      return `Angka ${angkaMax[0]} muncul paling sering, sebanyak ${maxFreq} kali`;
    case angkaMax.length > 1:
      return `Ada beberapa angka yang sama-sama sering muncul: ${angkaMax.join(", ")} sebanyak ${maxFreq} kali`;
    default:
      return "Tidak ada data";
  }
}