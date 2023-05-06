import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Todavía estás en el juego para reiniciar la session escribe : *${usedPrefix}delttt*`
    if (!text) throw `✳️ اسم الغرفة`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('✅ تم العثور على شريك')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
في انتظار @${room.game.currentTurn.split('@')[0]}  كأول لاعب
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *معرف الغرفة* ${room.id}

▢ *القواعد*
‣ اصنع 3 صفوف من الرموز, عموديًا أو أفقيًا للفوز
‣ اكتب *surrender* للخروج من اللعبة وإعلان هزيمتك.
`.trim()
        if (room.x !== room.o) await conn.sendButton(room.x, str, fgig, ['Surrender', 'surrender'], m, {
            mentions: conn.parseMention(str)
        })
        await conn.sendButton(room.o, str, fgig, ['Surrender', 'surrender'], m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.sendButton(m.chat, `⏳ *في الانتظار*\nاكتب الامر التالي لقبول الجولة او اضغط الزر
▢ *${usedPrefix + command} ${text}*

🎁 Recompensa: *4999 XP*`, fgig, ['👍🏻 قبول', `${usedPrefix + command} ${text}`], m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <nombre Sala>']
handler.tags = ['game']
handler.command = ['tictactoe', 'اكس', 'ttt', 'xo']

export default handler
