import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*لاتحاول حبيبي
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'سكربت', 'script'] 

export default handler
