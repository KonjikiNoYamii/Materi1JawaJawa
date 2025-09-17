export let duit = [15000, 25000, 8000, 12000]
export default function hitungTotal(uang) {
    return uang.reduce((naw,nak)=> naw + nak)

}
