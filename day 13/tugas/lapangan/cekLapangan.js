const jadwalHariIni = ["08:00", "10:00", "15:00"];
const bookingLapangan = "11:00"

function cekLapangan(jadwal,booking) {
    if (jadwal.includes(booking)) {
        return `jadwal ${booking} sudah terisi`
    }else {
        return `${booking} tersedia`
    }
}

export {jadwalHariIni,bookingLapangan,cekLapangan}