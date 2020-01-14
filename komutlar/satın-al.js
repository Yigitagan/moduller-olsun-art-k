const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {


    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'gold-rol') {
        if (!message.guild.roles.find("name", 'Moderator')) return message.channel.send('Adına göre bir rol bulamadım `Moderator`, sahiplerine danış.')
        if (author < 700) return message.channel.send('En azından ihtiyacın var`700TL` moderatör rolünü satın almak.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Moderator'))

        db.subtract(`money_${message.author.id}`, 700)
        message.channel.send(message.author.tag + ' İçin Moderatör rolünü başarıyla aldınız.`700TL`')
    } else if(args[0] == 'admin') {
        if (!message.guild.roles.find("name", 'Admin')) return message.channel.send('Adına göre bir rol bulamadım `Admin`, sahiplerine danış.')
        if (author < 1800) return message.channel.send('En azından ihtiyacın var `1800TL` Yönetici rolünü satın almak için.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Admin')) // get the role & add it

        db.subtract(`money_${message.author.id}`, 1800)
        message.channel.send(message.author.tag + ' İçin Yönetici rolünü başarıyla aldınız `1800TL`')
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'd',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};