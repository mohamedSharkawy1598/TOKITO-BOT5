import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `
┌───「 *PERFIL* 」
▢ *🔖 الاسم:* 
   • ${username} ${registered ? '\n   • ' + name + ' ': ''}
   • @${who.replace(/@.+/, '')}
▢ *📱الرقم:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
▢ *🔗الرابط:* wa.me/${who.split`@`[0]}${registered ? '\n▢ *🎈Edad*: ' + age + ' años' : ''}
▢ *⚠️التحذيرات:* ${warn}/${maxwarn}
▢ *💎 الماس :* ${diamond}
▢ *🆙 المستوى* : ${level}
▢ *⬆️ xp* : الاجمالي ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `قائمة *${usedPrefix}levelup*` : `_*${math}xp*_ Falta para subir de nivel`}
▢ *🏆الترتيب:* ${role}
▢ *📇 مسجل :* ${registered ? 'Si': 'No'}
▢ *⭐ بريميوم* : ${prem ? 'Si' : 'No'}
└──────────────`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['per']
handler.tags = ['group']
handler.command = ['بروفايل', 'perfil'] 

export default handler
