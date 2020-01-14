const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){
      }
 let user = message.mentions.users.first();
   
    
    if (message.mentions.users.size < 1) return message.reply('Herhangi birini, belirtmelisin!').catch(console.error);
 
    const oldur=new Discord.RichEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + ' adlı kişiyi, öldürdü! :gun:')
    .setImage('https://media.giphy.com/media/xI6YBQp7VWPW8/giphy.gif')
    .setFooter("GRAVİTY !", client.user.avatarURL)
    return message.channel.send(oldur);
}
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'Belirtilen kişiyi, öldürür!',
  usage: 'öldür'
};