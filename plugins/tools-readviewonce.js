
let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '✳️:ارسل جملة لي وضع بجانبها المزيد مثال ازالك.... اامزيد'
    if (m.quoted.mtype !== 'viewOnceMessageV2') throw '✳️ Eso no es un mensaje de viewOnce'
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}

handler.help = ['readvo']
handler.tags = ['tools']
handler.command = ['مزيد', 'المزيد', 'ver', 'readvo'] 

export default handler
