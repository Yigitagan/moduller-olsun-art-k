const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {



    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have enough permission to use this command.')
    }

    if (!args[0]) return message.reply('Please specify an amount to add.')
    if (isNaN(args[0])) return message.reply('That was not a valid number!')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added ' + args[0] + ' to ' + user)
    db.add(`para_${message.guild.id}_${message.author.id}`, args[0])

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'para-ekle',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};