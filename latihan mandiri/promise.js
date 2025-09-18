let janjiAsli = new Promise(resolve =>{
    resolve("Halo")
})

janjiAsli.then(hasil =>{
    console.log(hasil);
    
})
janjiAsli.then(hasil=>{
    console.log("2", hasil);
    
})

let waktu = 10000
function menit(time) {
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(`menunggu ${time}`)
        }, time)
    })
}
menit(waktu).then((pesan)=>{
    console.log(pesan);
})
