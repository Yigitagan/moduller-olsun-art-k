const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

let prefix = ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  
  let aktif = await db.fetch(`botkoruma.coderscode_${message.guild.id}`)
  if (aktif) {
    db.delete(`botkoruma.coderscode_${message.guild.id}`)
    message.channel.send(`Bot eklendiğinde atılması için ayarlanmış sistem başarıyla kapatıldı.`)
  }
 
  if (!aktif) {
    db.set(`botkoruma.coderscode_${message.guild.id}`, 'aktif')
    message.channel.send(`Başarılı! Artık sunucuya bot eklendiğinde otomatik olarak güvenlik sebebiyle atılacak.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-güvenlik-sistemi',
};