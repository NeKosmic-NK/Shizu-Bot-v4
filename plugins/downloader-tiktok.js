import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[āšš£šš¤ā] š¬ššššš šš šššššš šššššššš, ššš ššššš ššššššš šš šššššš/šššš šš ššššĢš ššĢššš šš šššššš\n\n*āā š¬šššššš:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[āšš£šš¤ā] š¬ššššš šš šššššš šššššššššš, ššš ššššš ššššššš šš šššššš/šššš šš ššššĢš ššĢššš šš šššššš\n\n*āā š¬šššššš:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[āšš£šš¤ā] š³š ššššššš, šššššššĢ šš ššššš šš ššššššššš šš ššššš, ššš ššššš šššššš š šššššššššš'
let meta = await getInfo(url).catch(_ => {})
await m.reply('ā _Cargando..._\nā°ā°ā°ā±ā±ā±ā±ā±ā±\nššØš„šš§š šŖš£š¤šØ šØšššŖš£šš¤šØ šš” š¦šŖš š¢šš£šš¤ šØšŖšØ š«šššš¤ šš š©šš š©š¤š  š„š¤š§ ššš«š¤š§ š°')
let buttons = [{ buttonText: { displayText: 'šØšššš' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: 'š»šš š³šššš©šš-š“š«', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}