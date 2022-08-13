let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙻𝙸𝙽𝙺 𝙴𝚁𝚁𝙾𝙽𝙴𝙾 𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n*👉🏻 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙿𝚄𝙴𝙳𝙴 𝙲𝙰𝚄𝚂𝙰𝚁 𝙸𝙽𝚃𝙴𝚁𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝚄𝙽𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙼𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙽𝚄𝙴𝚅𝙾*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒑𝒂𝒓𝒂 𝒖𝒏 𝒈𝒓𝒖𝒑𝒐  \n\n*—◉ 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒂𝒏𝒕𝒆:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝑬𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐:* ' + link, jid)

await m.reply('𝑺𝒖 𝒆𝒏𝒍𝒂𝒄𝒆 𝒔𝒆 𝒆𝒏𝒗𝒊𝒐 𝒂 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝑺𝒖 𝑮𝒓𝒖𝒑𝒐 𝒔𝒆𝒓𝒂 𝑬𝒗𝒂𝒍𝒖𝒂𝒅𝒐 𝒚 𝑸𝒖𝒆𝒅𝒂𝒓𝒂 𝒂 𝒅𝒆𝒄𝒊𝒔𝒊𝒐𝒏 𝒅𝒆 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ 𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒔𝒖 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒔𝒆𝒂 𝑹𝒆𝒄𝒉𝒂𝒛𝒂𝒅𝒂 𝒑𝒐𝒓 𝒍𝒂𝒔 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆𝒔 𝑪𝒂𝒖𝒔𝒂𝒔:\n1️⃣ 𝑬𝒍 𝑩𝒐𝒕 𝒆𝒔𝒕𝒂 𝑺𝒂𝒕𝒖𝒓𝒂𝒅𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ 𝑬𝒍 𝑩𝒐𝒕 𝒇𝒖𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐 𝒅𝒆𝒍 𝑮𝒓𝒖𝒑𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝑬𝒍 𝑮𝒓𝒖𝒑𝒐 𝒏𝒐 𝒄𝒖𝒎𝒑𝒍𝒆 𝒄𝒐𝒏 𝒍𝒂𝒔 𝑵𝒐𝒓𝒎𝒂𝒕𝒊𝒗𝒂𝒔 𝒅𝒆 ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *𝑬𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒔𝒆 𝒓𝒆𝒔𝒕𝒂𝒃𝒍𝒆𝒄𝒊𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ 𝑵𝒐 𝒔𝒆 𝒂𝒈𝒓𝒆𝒈𝒂 𝒂 𝑮𝒓𝒖𝒑𝒐𝒔 𝒔𝒆𝒈𝒖𝒏 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 𝑳𝒂 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒑𝒖𝒆𝒅𝒆 𝒕𝒂𝒓𝒅𝒂𝒓 𝑯𝒐𝒓𝒂𝒔 𝒆𝒏 𝒔𝒆𝒓 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒅𝒂. 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝑻𝒆𝒏𝒆𝒓 𝑷𝒂𝒄𝒊𝒆𝒏𝒄𝒊𝒂. 𝑮𝒓𝒂𝒄𝒊𝒂𝒔*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
export default handler
