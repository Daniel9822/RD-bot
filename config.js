const ownerNumber = ["18293862747@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '18293862747' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nEscriba ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adios ${numero} fue un placer terricola`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nAo menu do Itachi-bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = '1eb4ea79f7e4eef8241d5bdb054adc01'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'ITACHI 𝐁𝐎𝐓\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Su número esta bloqueado, no sea impertinente burro 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contacte al propitetário del bot para saber pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra miembro comum, o ban para la próxima*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu eres adm entonces no voy a banirte por mandar un tipo de mensage proibido*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho con antiporn ativado, ya sabes né...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu eres adm entonces no voy a baniarte por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Miembro comum, O ban para el próximo...'
// mensagem de ban no antilink

const adminmsglink = 'esos es un link amigo😡😡... ahhhh tu eres adm entonces puedes jajajaja 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'eso esta en la lista de palabras proibidas para el bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palabra prohibida? yá sabes né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, acepte ese café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenga un bonito dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Error, intente nuevamente mas tarde 😭🙏 :/'
// mensagem de erro

const notregister = `*Comando no registrado, escriba ${prefix}menu para ver la lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bacaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Tu parece una sanguijuela, un cangrejo amasado 😡'
const cadebot = 'Me chamou onii-chan 👉👈?'
const botfdp = 'Te puedo rapar, te dejare la cabeza blanca como una ñema'
const botgostoso = 'Gracias tu tambien  😳👉👈'
const botfofo = 'Gracias tu tambien 😳👉👈'
const botbaianor = 'Invite a tu novia para mis redes de los cuernos'
const botcorno = 'Te voy a joder, jugador de ff, comprador de pack enfermo'
const botputa = 'Puta tu madre coño 😡'
const botgay = 'Oye a un super gay hablando de gay 😡'
const botviado = 'Maricon sucio😡'
const numbotfeio = 'Nari de bota de policia 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde un poco rumy... ⌛',
    success: '✔️ Todo un exito! ✔️',
    error: {
        stick: '❌ Fallo, ocurrio un error al convertir la imagen en un adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando sólo puede ser usado en grupos! ❌',
        ownerG: '❌ Este comando sólo puede ser usado por el proprietário del grupo! ❌',
        ownerB: '❌ Este comando sólo puede ser usado por el número proprietário! ❌',
        admin: '❌ SILENCIO MIEMBRO COMUM TU NO TIENES MORAL PARA USAR ESE COMANDO ❌',
        Badmin: '❌ Este comando sólo puede ser usado cuando el bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=18293862747:+1 829 386-2747\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber