import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*π΅πππππ:* ${username} ${registered ? '(' + name + ') ': ''}
*π΅πππππ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*π¬πππππ:* wa.me/${who.split`@`[0]}${registered ? '\n*π¬πππ:* ' + age + ' aΓ±os' : ''}
*π³πππππ:* ${limit} πππ ππππ
*πΉπππππππππ:* ${registered ? 'β': 'β'}
*π·ππππππ:* ${prem ? 'β' : 'β'}
*π΅πππππ ππ πππππ:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler
