const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın `Gold` üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){
      }
  exports.run = async (client, message, args) => {
if(message.author.id === "401797698799271948","415148312434442240") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle!')

  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)
   
   
 message.guild.members.forEach(u => {
u.removeRole(rol)
})
  message.channel.send(embed)
      } else
          message.channel.send('Maalesef bu komutu kullanamazsın. Kodu Satın Almamışsın!')
  }
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al'],
    permLevel: 0
}

exports.help = {
    name: 'rolal',
    description: 'Log kanalını belirler.',
    usage: 'kanal <#kanal>'
}