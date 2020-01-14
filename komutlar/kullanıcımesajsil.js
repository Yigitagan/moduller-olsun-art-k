const Discord = require('discord.js');

exports.run = async function(client, message, args) {
 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`);
  
  var u = message.mentions.users.first()
  var msj = args[1]
  if(!u) return message.reply("Bir kullanıcı giriniz!")
  if(!msj) return message.reply("Bir rakam giriniz!")
  if(isNaN(msj)) return message.reply("Geçerli bir rakam giriniz!")
  if(msj < 1) return message.reply("1 adet mesajdan daha fazla mesaj silemem!")
  if(msj > 100) return message.reply("100 adet mesajdan daha fazla mesaj silemem!")
  
 var fetched = await message.channel.fetchMessages({limit: msj})
  
  if (u) {
    var fetched = fetched.filter(m => m.author.id === u.id)
    .array()
    .slice(0, msj)
    }
    
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("14 günden önceki mesajlar silinmemektedir!"))
  message.channel.send(`${u.username}  adlı kullanıcının **${msj}** adet mesajı silindi!!`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["kullanıcı-temizle", "kullanıcıtemizle", "kullanıcımesajtemizle"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-mesaj-temizle',
  description: 'Belirttiğiniz kullanıcının belirttiğiniz kadar mesajını siler!',
  usage: 'kullanıcı-mesaj-temizle @kullanıcı <silinecek mesaj sayısı>'
};