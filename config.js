import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['8617029364091', 'ريوزاكي', BOT],
  ['8617029364091'], 
  ['201284329186'] 
] //Numeros de owner 

global.mods = ['8617029364091'] 
global.prems = ['201284329186', '8617029364091', '8617029364091']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'ريوزاكي┃ᴮᴼᵀ' 
global.author = '@ال' 
global.fgig = '▢ تابعني على تيك توم\nhttps://www.tiktok.com/@meleo.1' 
global.dygp = 'https://chat.whatsapp.com/Eflx7D1eNPxEV3SEp8JMio'
global.fgsc = 'https://chat.whatsapp.com/Eflx7D1eNPxEV3SEp8JMio' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://1.bp.blogspot.com/-clc71LlTZh8/XmpAJjYXs0I/AAAAAAAAIII/4J4Ma6BR9KcBqbz9RwNMZcrw12Mn71gnACLcBGAsYHQ/s1600/lelouch.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
