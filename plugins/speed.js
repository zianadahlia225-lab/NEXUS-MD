import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {
  let start = performance.now()
  let { key } = await conn.sendMessage(m.chat, { text: 'Testing Speed...' }, { quoted: m })
  let end = performance.now()
  let speed = (end - start).toFixed(4)
  await conn.editMessage(m.chat, key, `🚀 *NEXUS-MD Speed:* ${speed} ms`)
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler

