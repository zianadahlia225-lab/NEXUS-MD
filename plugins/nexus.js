let handler = async (m, { conn }) => {
  let info = `*Welcome to NEXUS-MD* 🚀\n\nThis is a professional technical community for gurus. We focus on high-level discussion and global networking.`
  conn.reply(m.chat, info, m)
}
handler.help = ['nexus']
handler.tags = ['main']
handler.command = ['nexus']

export default handler

