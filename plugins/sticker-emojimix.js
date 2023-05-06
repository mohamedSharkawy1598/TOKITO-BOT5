
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `📌 مثال : ${usedPrefix + command} 😎+🤑`
if (!text.includes('+')) throw  `✳️ Separe el emoji con un *+* \n\n📌 مثال : \n*${usedPrefix + command}* 😎+🤑`
let [emoji, emoji2] = text.split`+`
let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji)}_${encodeURIComponent(emoji2)}`) ).json()  
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}}

handler.help = ['emojimix <emoji+emoji>']
handler.tags = ['sticker']
handler.command = ['دمج'] 
handler.diamond = true

export default handler
