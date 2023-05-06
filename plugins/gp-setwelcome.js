//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ تم تغيير رسالة الترحيب')
  } else throw `✳️ ادخل رسالة الترحيب\n\n@user (mención)\n@group (Nombre de grupo)\n@desc (description de grupo)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['تغيير الترحيب'] 
handler.admin = true
handler.owner = false

export default handler
