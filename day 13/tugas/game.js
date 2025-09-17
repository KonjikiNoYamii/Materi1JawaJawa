export const poinGame = [200, 150, 300, 180, 120]
export const POIN_MAKSIMAL = 1000 
export const POIN_BONUS = 50
export default function hitungTotalPoin(...poin) {
    return poin.reduce((naw,nak) => naw + nak)
}