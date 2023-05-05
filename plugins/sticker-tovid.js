import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '  *『✨🐸قم برد علي ملصق فيديو لي تحويله لي فيديو』*'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw '*『✨🐸قم برد علي ملصق فيديو لي تحويله لي فيديو』*'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'tovid.mp4', '*『تم تحويل الملصق بنجاح لفيديو🐸▶️』*' , m)
}
handler.help = ['tovid']
handler.tags = ['sticker']
handler.command = ['tovideo', 'لفيديو']

export default handler
