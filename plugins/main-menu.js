import moment from 'moment-timezone'
import { getPlatform } from '../lib/helper.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    let d = new Date(new Date() + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
          ? conn.user.jid
          : m.sender
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    let pp = './Guru.jpg'
    let user = global.db.data.users[who]
    let { name, warn, registered, regTime, age } = global.db.data.users[who]
    let username = conn.getName(who)
    let totaluser = Object.values(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)
    let greeting = ucapan()
    let quote = quotes[Math.floor(Math.random() * quotes.length)]

    let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
    const logo = 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' 

    const platform = getPlatform()

    let str = `
╭━━━⊰ *GURU-AI* ⊱━━━╮
┃
┃ 👋 Hello, ${taguser}!
┃ ${greeting}
┃
┃ 📜 *${quote}*
┃
╰━━━━━━━━━━━━━━━╯

╭━━━⊰ *TODAY* ⊱━━━╮
┃ 📅 *Date:* ${date}
┃ ⏰ *Time:* ${moment().tz('Asia/Kolkata').format('HH:mm:ss')}
╰━━━━━━━━━━━━━━━╯

╭━━━⊰ *BOT INFO* ⊱━━━╮
┃ 🤖 *Bot Name:* ${global.botname || 'NEXUS-MD'}
┃ 👑 *Owner:* ${global.author || 'Guru'}
┃ 🖥️ *Platform:* ${platform}
┃ ⌨️ *Prefix:* ${usedPrefix}
┃ ⏱️ *Uptime:* ${uptime}
┃ 📊 *Users:* ${totaluser}
┃ 📂 *Registered:* ${rtotalreg
* .ping (Check Bot Speed)}
╰━━━━━━━━━━━━━━━╯

Type *${usedPrefix}list* to see all commands
${readMore}
`

    const buttons = [
      ['🔍 Commands', `${usedPrefix}list`],
      ['⚡ Ping', `${usedPrefix}ping`]
        ]

    const urls = [
      ['💻 GitHub', 'https://github.com/Guru322'],
      ['🎥 YouTube', 'https://www.youtube.com/@Asliguru'],
      ['💬 Telegram', 'https://t.me/NAKLI_GURU']
    ]

    await conn.sendButton(
      m.chat, 
      str,
      '© GURU-AI | 2025', 
      logo, 
      buttons, 
      null, 
      urls,
      m 
    )
    
    m.react('🤖')
  } catch (e) {
    console.error(e)
    await m.reply('*GURU-Ai Menu*\n\nUse these commands:\n• .help - Show all commands\n• .ping - Check response time\n• .alive - Bot status\n\nVisit: https://github.com/Guru322/GURU-BOT')
  }
}

handler.help = ['menu', 'help', 'h']
handler.tags = ['main']
handler.command = ['menu', 'help', 'h']
handler.desc = 'Display the bot\'s main menu with commands, user info and bot status'

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

// Fixed ucapan function with proper hour conditions
function ucapan() {
  const hour = parseInt(moment().tz('Asia/Kolkata').format('HH'))
  
  if (hour >= 0 && hour < 4) {
    return 'Good Night 🌙'
  } else if (hour >= 4 && hour < 12) {
    return 'Good Morning 🌄'
  } else if (hour >= 12 && hour < 16) {
    return 'Good Afternoon ☀️'
  } else if (hour >= 16 && hour < 19) {
    return 'Good Evening 🌇'
  } else {
    return 'Good Night 🌙'
  }
}

// Keep existing quotes array
const quotes = [
  "I'm not lazy, I'm just on my energy saving mode.",
  'Life is short, smile while you still have teeth.',
  'I may be a bad influence, but darn I am fun!',
  "I'm on a whiskey diet. I've lost three days already.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  'I told my wife she should embrace her mistakes... She gave me a hug.',
  "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
  "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  'If you think nobody cares if youre alive, try missing a couple of payments.',
  "I used to think I was indecisive, but now I'm not so sure.",
  "If you can't convince them, confuse them.",
  'I told my wife she was drawing her eyebrows too high. She looked surprised.',
  "I'm not clumsy, I'm just on a mission to test gravity.",
  "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
  "Life is like a box of chocolates; it doesn't last long if you're hungry.",
  "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
  'Why do they call it beauty sleep when you wake up looking like a troll?',
  "I don't always lose my phone, but when I do, it's always on silent.",
  'My bed is a magical place where I suddenly remember everything I was supposed to do.',
  'I love the sound you make when you shut up.',
  "I'm not arguing, I'm just explaining why I'm right.",
  "I'm not a complete idiot, some parts are missing.",
  'When life gives you lemons, squirt someone in the eye.',
  "I don't need anger management. You just need to stop making me angry.",
  "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
  "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
  "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
  "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
  'The early bird can have the worm because worms are gross and mornings are stupid.',
  'If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!',
  'The road to success is always under construction.',
  "I am so clever that sometimes I don't understand a single word of what I am saying.",
  'Some people just need a high-five. In the face. With a chair.',
  "I'm not saying I'm perfect, but I'm pretty close.",
  'A day without sunshine is like, you know, night.',
  'The best way to predict the future is to create it.',
  "If you can't be a good example, then you'll just have to be a horrible warning.",
  "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
  "I'm not lazy. I'm on energy-saving mode.",
  "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
  "I don't have a bad handwriting, I have my own font.",
  "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
  'वक्त हमे बहुत कुछ सिखा देता है, खासकर तब जब हमारे पास वक्त नहीं होता।',
  'जिंदगी एक किताब की तरह होती है, हर दिन नया पन्ना बदलता है। कभी हंसते हैं, कभी रोते हैं, पर हर किसी की कहानी अधूरी होती है!',
  'पढ़ाई करो तो दिल लगता नही, दिल लगाओ तो दिमाग़ लगता नहीं।',
  'दोस्ती इतनी गहरी करो की दिल में बस जाओ, ऐसे दोस्ती निभाओ की हमे भी तुम्हारे दोस्त होने पर नाज हो।',
  'मेरे दोस्त तुम बहुत याद आते हो, जब भी भूख लगती है वो समोसे बहुत याद आते है।',
  'जीवन का असली मज़ा तो तब आता है, जब दूसरे आपकी ज़िंदगी जीने की कोशिश करते हैं।',
  'कुछ लोग तो इतने फालतू होते हैं, खुद की ज़िंदगी खुद ही नहीं जी पाते और दूसरों की ज़िंदगी में टांग अड़ा देते हैं।',
]

