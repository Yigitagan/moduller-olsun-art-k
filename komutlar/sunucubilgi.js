const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Ad:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Bölge', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
      .addField('Üye Durumları', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi <a:online:647108287984304129>\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta <a:idle:647108287485050890>\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin <a:dnd:647108287606685706>\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez <a:offline:647108287623331854>`, true)
      .addField('Roller', message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};