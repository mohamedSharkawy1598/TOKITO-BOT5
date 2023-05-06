
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${usedPrefix + command}* Lil Peep hate my life`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
	≡ *FG MUSIC*
┌──────────────
▢ 📌 *العنوان* : ${title}
▢ 📆 *التاريخ:* ${ago}
▢ ⌚ *المشاهدات:* ${timestamp}
▢ 👀 *الوقت:* ${views}
└──────────────`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 صوت', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 فيديو', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['صوت', 'فيديو']

export default handler
