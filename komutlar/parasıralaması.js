
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    let para = db.startsWith(`para_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < para.length; i++) {
        let user = bot.users.get(para[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${para[i].data}$\n`
    }

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)




}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'para-sıralaması',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};