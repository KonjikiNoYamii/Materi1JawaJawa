let paraIstri = ["Yami","Yue","Victorique"]
function isMine(istri) {
    let kebutuhanIstri = [234,431,53]
    istri.forEach((element,index) => {
       console.log(`ini istriku yang ke- ${index + 1} namanya itu ${element}`);
    });
    let totalBiaya = kebutuhanIstri.reduce((nilaiAwal,nilaiTerbaru) =>{
        return `${nilaiAwal + nilaiTerbaru}`
    },0) 
    console.log(totalBiaya);
    
    let paraIstri2 = ["Bronya","Atri","Cerydra"]
    let nambahIstri = istri.concat(paraIstri2)
    console.log(nambahIstri);

        nambahIstri.forEach((item,index) =>{
        console.log(`kenalkan ulang istri ke- ${index + 1} yaitu ${item}`); 
    });
    let urutkanNamaIstri = nambahIstri.sort()
    console.log(urutkanNamaIstri);

    let kebutuhanIstri1 = [32,54,23,43,15]
    let totalBiaya1 = kebutuhanIstri1.reduce((nilaiAwal,nilaiTerbaru) =>{
        return `${nilaiAwal + nilaiTerbaru}`
    })
    console.log(totalBiaya1);
    
    let gabungkanTotalBiaya = totalBiaya.concat(totalBiaya1)
    console.log(gabungkanTotalBiaya);

    let dibagibagi = nambahIstri.map((item,index) =>{
        return `istri ke- ${index + 1} yaitu ${item}, dengan biaya :${gabungkanTotalBiaya / item.length}`;
    })
    let reversenama =dibagibagi.reverse()
    console.log(reversenama);

    let urutkanlagi = reversenama.sort()
    console.log(urutkanlagi);
    
    let hasilAkhir = urutkanlagi

    return hasilAkhir.join(" ")
    
}
console.log(isMine(paraIstri));
