const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();


exports.run = (client, message, args) => {
 if(message.author.id != 401797698799271948) { return message.channel.send("Bu komut sahibime özdür.")}

  let şahıs = args[0]

  if (!şahıs) return message.channel.send('Verilecek şahsı taglayınız.')
  
  
  
  message.channel.send(`\`${şahıs}\` Artık gold!`)
db.set(`gold_${şahıs}`, 'acik')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: 'yapımcı'
};
exports.help = {
  name: 'goldyap',
  description: 'Napcan?',
  usage: 'goldyap'
};