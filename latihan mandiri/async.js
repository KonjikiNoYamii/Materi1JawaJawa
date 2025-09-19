async function sapa() {
    return "halo"    
}

sapa()
.then(pesan =>{
    console.log(pesan);
    
})


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function jalankan() {
    console.log("tunggu");
    await wait(2000);
    console.log("haloooooo")
}

jalankan()

function wait2() {
    
}