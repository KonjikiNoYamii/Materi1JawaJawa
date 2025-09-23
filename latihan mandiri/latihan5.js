const siswa = `{"user":"Andi","status":"offline"}`
const toObject = JSON.parse(siswa)

toObject.status = "online"

const toString = JSON.stringify(toObject)
console.log(toString);

async function ambilData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    data.forEach(item => {
        console.log(item.name);
        
    });        
}
ambilData()

function printData() {
    let data = { "pesan": "Data berhasil diproses" }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.pesan)
        }, 2000);
    })
}
printData()
.then(data =>{
    console.log(data);
    
})
async function ambilTodo() {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    const hasil = data.filter(item =>item.completed === false).length
    return hasil
    } catch (error) {
        console.error(error);
        
    }
}
ambilTodo()
.then(data =>{
    console.log(data);
    
})