import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '[βπππβ] π°ππππππ ππ ππΜππππ ππ πππππ, ππ ππ ππππ πππΜπ ππ πππ ππ πππππππ  #myns'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '[βπππβ] π½ππππππππ πππ πππ ππ ππππππππ, πππ ππ πππππππ\n\nπ·πππ πππππππ ππ ππΜππππ ππ πππππ #myns'
user.registered = false
m.reply(`[ β ] πΌππππ ππ ππ ππππΜ ππππππππππ/a`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
