const uang = 100000
const Subtotal = function() {
    let pulsa = 20000
    let cemilan = 5000
    let minuman = 5000
    let totalBelanja = (pulsa + cemilan + minuman)
    return totalBelanja
}

function pajak(belanjaan) {
    let pajak = 5000
    return (belanjaan - pajak)
}

function diskon(belanjaan) {
    let diskon = 0.9
    return (belanjaan * diskon)
}

function kembalian(belanjaan,duit) {
    return duit -= belanjaan
}

export {uang,Subtotal,pajak,diskon,kembalian}