import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '✳️ ارسل لي فيديو او صورة او قم برد عليها لصنع رابط منها🐸✨'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`▢ ${media.length} Byte(s) 

▢ ${isTele ? '(لا تاريخ انتهاء الصلاحية)' : '(غريب)'} 
▢ *الرابط🔀 :* ${link}
  `)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['upload', 'لنك']

export default handler
