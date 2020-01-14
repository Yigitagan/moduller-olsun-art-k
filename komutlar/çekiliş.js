const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = async (client, message, args) => {
  message.delete(4000)
  

  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let room = message.mentions.channels.first()
  let title = args.slice(3).join(" ")
  let duration = args[1]
  let sure = args[2]
  let bisi;
  let filter = m => m.author.id === message.author.id;
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  
  if (!room) {
  var giveEmbed1 = new Discord.RichEmbed().setColor("ab0000").setTitle(`${message.guild.name} - Çekiliş Sistemi `).setDescription(`**Çekiliş kanalını etiketlemelisin !**`).setTimestamp().setFooter(`${message.author.username}`, message.author.avatarURL);
  return message.channel.send(giveEmbed1) 
  }
  
  if (!duration || duration >= '60')

  {
    var giveEmbed1 = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle(`${message.guild.name} - Çekiliş Sistemi `)
    .setDescription(`**Bir süre yazmalısın!**`)
        .setTimestamp()

    .setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }

  
  if (!sure || !sure == 'saniye' || !sure == 'dakika' || !sure == 'saat' || !sure == 'gün' )

  {
    var giveEmbed1 = new Discord.RichEmbed().setColor("ab0000").setTitle(`${message.guild.name} - Çekiliş Sistemi `).setDescription(`**Süreyi doğru yazmalısın !**`).setTimestamp().setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }
  
  if (!title) 
  
  {
    var giveEmbed1 = new Discord.RichEmbed()
    .setColor("ab0000").setTitle(`${message.guild.name} - Çekiliş Sistemi `).setDescription(`**Ödülü yazmalısın.**`).setTimestamp().setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }

  
  if (sure == 'saniye') bisi = 'seconds'
  if (sure == 'dakika') bisi = 'minutes'
  if (sure == 'saat') bisi = 'hours'
  if (sure == 'gün') bisi = 'days' 
  
  let giveEmbed = new Discord.RichEmbed()
  .setColor("ffdf00")
  .setTitle(`${message.guild.name} - Çekiliş Sistemi  \n\nÇekiliş Hediyesi: ${title}`)
  .setDescription(`🎉 emojisine tıklayarak çekilişe katılabilirsiniz.\n\n**Çekiliş Süresi :**\` ${duration} ${sure}\``)
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekilişi Yapan Yetkili : ${message.author.username}`, message.author.avatarURL);
  room.send(giveEmbed).then(m => {
   
    let re = m.react('🎉');
    setTimeout(() => {
      let users = m.reactions.get("🎉").users
      let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
      let gFilter = list[Math.floor(Math.random() * list.length) + 0]
      
      let endEmbed = new Discord.RichEmbed()
      .setColor("ffdf00")
      .setTitle(`${message.guild.name} - Çekiliş Sistemi  \n\nÇekiliş Hediyesi: ${title}`)
      .setDescription(`**Çekilişi Kazanan :** ${gFilter}`)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Çekilişi Yapan Yetkili : ${message.author.username}`, message.author.avatarURL)
      m.edit(endEmbed)
   }, ms(`${duration} ${bisi}`))
  });
  


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yaparsınız. Kullanım: ,çekiliş <#kanal> <süre> <ödül>',
  usage: 'çekiliş <#kanal> <süre> <ödül>'
};