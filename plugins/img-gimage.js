
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Ingrese la imagen que quiere buscar \n\n📌 مثال: *${usedPrefix + command}* ناروتو`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❎ No se encontró la imagen intente con otro'
  conn.sendFile(m.chat, url, 'img.png', `
✅ تم : *${text}*

⏣ *Ancho*: ${width}
⏣ *Altura*: ${height}
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(صورة|صوره|img|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


