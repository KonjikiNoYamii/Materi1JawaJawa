// soal 1
function hitungNilai(nilaiArr) {
    let i = 0;
    do{
        if (nilaiArr.length === 0) { // di validasi jika data kosong maka akan ditolak
            return "Data tidak boleh kosong"
        }
        i++;
    }
    while (i < 1); // diberi angka 1 untuk validasi minimal

    let lulus = 0        //membuatu variabel counter untuk menampung value saat iterasi
    let tidakLulus = 0
    let hasil = []
    let total = 0

    for(let j = 0; j < nilaiArr.length; j++){ // iterasi menggunakan for loop.. alurnya adalah
        let status = nilaiArr[j];             // setiap looping increment j maka akan menambah nilailArr
        total += nilaiArr[j];
        if(status >= 75){                     // yang mana punya [j] dan disimpan pada variabel status
            lulus++;                          // sehingga variabel status akan disaring menggunakan
        }else if(status < 75){                // if dan if akan menyimpan data tersebut ke variabel tumbal
            tidakLulus++;                     // atau variabel counter                  

    }
} let rekap = [
    {jenis: "lulus", jumlah:lulus },          //variabel rekap untuk menampung array yang berisi object yang mana
    {jenis: "tidak lulus", jumlah:tidakLulus} // variabel object ini berisi properti variabel counter
];
    let rataRata= total / nilaiArr.length

    
    rekap.forEach(item =>{
        hasil.push(`rata rata ${rataRata} jumlah orang ${item.jenis}: ${item.jumlah}`)
});
    return hasil.join(", ")
}
console.log(hitungNilai([80, 70, 90, 100, 60]));
console.log("===========================================================================");


// soal 2
function hitungTransksi(transaksiArr) {
    let debit = 0
    let kredit = 0
    let i = 0
    let tumbal = []
    let total = 0
    do{
        if (transaksiArr.length === 0) {
            return `Data tidak boleh kosong`
        }
    i++;
    }
    while (i < transaksiArr.length);
    for(let j = 0; j < transaksiArr.length; j++){
        let status = transaksiArr[j];
        total = debit;
        if(status == "Debit"){
            debit++;
        }else if(status == "Kredit"){
            kredit++
        }
    }
    let rekap = [
        {jenis: "Debit", jumlah: debit},
        {jenis: "Kredit",jumlah: kredit}
    ];

    rekap.forEach(item =>{
        switch (item.jenis) {
            case "Debit":
                return(`Debit: ${item.jumlah}`);
                break;
            case "Kredit":
                return(`Kredit: ${item.jumlah}`);
                break;   
                 
                
        }
        
    });
    let rataRata = (debit / transaksiArr.length) * 100;

    tumbal.push(`Debit:${debit} Kredit:${kredit} %Debit: ${rataRata}%`)
    return tumbal.join(", ")
}
console.log(hitungTransksi(["Debit", "Kredit", "Debit", "Debit"]));
console.log("===========================================================================");


// soal 3
function hitungHafalan(hafalanArr) {
    let i = 0
    let juz1 = 0
    let juz2 = 0
    let juz3 = 0
    let tumbal = []
    do{
        if(hafalanArr.length === 0){
            return `Data tidak boleh kosong`
        }
        i++;
    }
    while (i < hafalanArr[i]);
    for(let j = 0; j < hafalanArr.length; j++){
        if(hafalanArr[j] == "1 juz"){
            juz1++;
        }else if(hafalanArr[j] == "2 juz"){
            juz2++;
        }else if(hafalanArr[j] == "3 juz"){
            juz3++;
        }
    }
    let rekap =[
        {jenis: "1 juz", jumlah: juz1},
        {jenis: "2 juz", jumlah: juz2},
        {jenis: "3 juz", jumlah: juz3}
    ];
    
    rekap.forEach(item =>{
        switch (item.jenis) {
            case "1 juz":
                return `1 juz: ${item.jumlah}`
                break;
            case "2 juz":    
                return `2 juz: ${item.jumlah}`
            case "3 juz":
                return `3 juz: ${item.jumlah}`
                break;
        }
    });
    tumbal.push(`1 juz: ${juz1} kali, 2 juz: ${juz2} kali, 3 juz: ${juz3} kali`)

    return tumbal.join(", ")
    
}
console.log(hitungHafalan(["1 juz", "2 juz", "1 juz", "3 juz", "2 juz"]));
console.log("===========================================================================");

//soal 4
function hitungCuaca(cuacaArr) {
    let i = 0
    let cerah = 0
    let hujan = 0
    let mendung = 0
    let tumbal = []
    do{
        if(cuacaArr.length === undefined){
            return `Data tidak boleh kosong`
        }
        i++;
    }
    while (i < 1);

    for(let j = 0; j < cuacaArr.length;j++){
        if (cuacaArr[j] == "Hujan") {
            hujan++;
        }
        else if(cuacaArr[j] == "Cerah"){
            cerah++;
        }
        else if (cuacaArr[j] == "Mendung") {
            mendung++;
        }    }
    let rekap = [
        {jenis: "Hujan", jumlah: hujan},
        {jenis: "Cerah", jumlah: cerah},
        {jenis: "Mendung", jumlah: mendung}
    ]
    rekap.forEach(item =>{
        switch (item.jenis) {
            case "Hujan":
                return `Hujan ${hujan} kali`              
                break;
            case "Cerah":
                return `Cerah ${cerah} kali`              
                break;
            case "Mendung":
                return `Mendung ${mendung} kali`              
                break;    
        }
    });
    tumbal.push(`"Hujan: ${hujan}, Cerah: ${cerah}, Mendung: ${mendung}`)
    return tumbal.join(", ")
}
console.log(hitungCuaca(["Hujan","Cerah","Cerah","Hujan","Mendung"]));
console.log("===========================================================================");



