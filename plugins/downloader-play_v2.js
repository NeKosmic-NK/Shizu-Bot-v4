import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[}🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play.1 bad Bunny - am*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙢𝙤𝙨 𝙨𝙪𝙨 𝙖𝙪𝙙𝙞𝙤...⏳_*`, m)  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙢𝙤𝙨 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤..⏳_*`, m)
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `_𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤𝙨*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
