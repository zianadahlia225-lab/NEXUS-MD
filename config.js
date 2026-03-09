import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS || "917605902011;GURU;6281255369012;Ash"

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(254756031974);
}

global.mods = ['917605902011', '32460248586']
global.allowed = ['917605902011', '32460248586', '19152999993']

// Sticker WM
global.botname = 'NEXUS MD'
global.packname = 'GURU┃ᴮᴼᵀ'
global.author = 'ᴳᵘʳᵘ ˢᵉⁿˢᵉⁱ'
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')

// Status indicators
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
