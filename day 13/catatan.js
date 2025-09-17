export function hitung() {
    for(let i = 1; i <= 5; i++ ){
        for(let j = 1; j <= 5; j++){
            console.log(`${i} X ${j} ${i * j}`);
        }
        
    }
}


export function namaOrang(namaAwal,namaAkhir) {
    return(namaAwal + namaAkhir)
}

const angka = [5,2,4,5,1,8]

function barang(...things) {
    things.forEach(item => {
        console.log(`ini ${item}`);
        
    });
}
export {angka,barang}
