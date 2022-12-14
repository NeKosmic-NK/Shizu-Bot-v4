import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}ð°ðððððð ðð ðððððð ððĖðððð ðð ððððððððð.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
â ð  *${gt} ${vs}*
ââââââââââââââââââ
â ðŦ ðĩððððð
â ${filename}
ââââââââââââââââââ
â ðŠ ð·ððð
â ${filesizeH}
ââââââââââââââââââ
â ð ðŧððð
â ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ðŧðð ðģððððĐðð-ðīðŦ',
body: 'ðšðððð ððð ðūðððððĻðð',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`}}})
  
let info = `ðīðððð ð 150 ðīðŪ ðð ððððððð ððð ðð ðð ðððððĖ`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['ðððĢðŠ ðŋððĻððð§ðððĻ ð', '#descargasmenu'],
['ðððĢðŠ ðūðĪðĒðĨðĄððĐðĪ âĻ', '.allmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m,)  
/* let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}ð―ððððð ð ðððððððð ðððð ðð ððð ðð ðððððð ððĖðððð ðð ððððððððð`)
console.log(e)
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.limit = 3
handler.exp = 100
export default handler
