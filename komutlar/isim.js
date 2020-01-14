const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args, member) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesin adı değitirildi!`)

   
   
   message.guild.members.forEach(u => {
u.setNickname(args[0] + ' ' + u.user.username)
   })
 
  message.channel.send(embed)
}
exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'isim',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}
