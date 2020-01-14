
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let krma = db.get(`botkoruma_${message.guild.id}`)
  
    let ackapat = args[0];
    if(ackapat === "aç") {
      if(!krma) {
        db.set(`botkoruma_${message.guild.id}`, "botkorumaaktifysfdızolarınamk")
        message.channel.send(`:white_check_mark: Bot koruması başarılı bir şekilde \`aktifleştirildi\`.`)
      } else {
        if(krma === "botkorumaaktifysfdızolarınamk") {
          return message.channel.send(`:warning: Bot koruma durumunuz şu anda \`aktif\` eğer deaktifleştirmek istiyorsanız;\n\`${ayarlar.prefix}bot-koruma kapat\` şeklinde bot koruma durumunu kapatabilirsiniz.`)
        }
      }
    } else if(ackapat === "kapat") {
      if(krma === "botkorumaaktifysfdızolarınamk") {
        db.delete(`botkoruma_${message.guild.id}`);
        message.channel.send(`:white_check_mark: Bot koruması başarılı bir şekilde \`deaktifleştirildi\`.`)
      } else {
        if(!krma) {
          return message.channel.send(`:warning: Bot koruma durumunuz şu anda \`deaktif\` eğer aktifleştirmek istiyorsanız;\n\`${ayarlar.prefix}bot-koruma aç\` şeklinde bot koruma durumunu aktifleştirebilirsiniz.`)
        }
      }
    } else {
      return message.channel.send(`Doğru kullanım; \n \`${ayarlar.prefix}bot-koruma aç/kapat\``)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botkoruma'],
    permLevel: 0
}

exports.help = {
    name: 'bot-koruma',
    description: 'Sunucuya giren botların banlanıp banlanmayacağına karar verirsiniz.',
    usage: 'bot-koruma aç/kapat'
}