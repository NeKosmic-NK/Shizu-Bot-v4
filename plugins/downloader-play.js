import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*#play bad Bunny - am*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '[❗𝙄𝙣𝙛𝙤❗] 𝙇𝙤𝙨 𝙨𝙞𝙚𝙣𝙩𝙤, 𝙣𝙤 𝙥𝙪𝙙𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤/𝙫𝙞𝙙𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤𝙨 𝙣𝙤𝙢𝙗𝙧𝙚𝙨/𝙩𝙞𝙩𝙪𝙡𝙤𝙨'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}
📇 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻:* ${description}
📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻:* ${publishedTime}
⌚ *𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:* ${durationH}
👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv ${url}`],
['𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
