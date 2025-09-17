const brightness = (foto) => ({...foto,brightness: "100%"})
const scale = (foto) => ({...foto,scale:"grayscale" })

export default function size(foto) {
    return {...foto,size: "1024x768"}
}

export {brightness,scale}