
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ تم اعادة ضبط الرابط\n\n📌 الرابط الجديد هوا:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'اعادة', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
