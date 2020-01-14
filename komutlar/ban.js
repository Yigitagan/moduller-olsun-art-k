const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın. <a:banned:647108283160854529>');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın. <a:banned:647108283160854529').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam. <a:hayir:647108300730531851>');
  message.guild.ban(user, 2);
   user.send(`**${message.guild.name}** Adlı Sunucudan **Banlandınız!**`)
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban <a:banned:647108283160854529>')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
