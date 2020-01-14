const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let istek = args[0]

  let user = message.mentions.users.first() || message.member;
  let gold = await db.fetch(`gold_${message.member.id}`);
  let para = await db.fetch(`para_${message.author.id}`);


 

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!";

  try {
    
    if (!istek) {
 
const e = new Discord.RichEmbed()
.setColor('BLACK')
.setDescription(`Mevcut ürünler: Sınırsız Gold Üye - 100.000 Puan!\nSatın alma: ${prefix}market gold`)
message.channel.send(e)
      return
    }
    
    if (istek === 'gold') {

      if (gold == 'acik') {
      const embed = new Discord.RichEmbed()
        .setDescription(`Zaten goldsun!`)
    .setColor('BLACK')
      .setTimestamp()
      message.channel.send({embed})
    

} else if  (para = 100000) {
  const embed = new Discord.RichEmbed()
        .setDescription(`Artık goldsun!`)
  .setColor('BLACK')
      .setTimestamp()
      message.channel.send({embed})
  db.add(`para_${message.author.id}`, 100000)
db.set(`gold_${message.member.id}`, 'acik')
      }
      return

      return
    }
    } catch(err) {
      
    }

    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'market',
  description: 'Eşya',
  usage: 'market'
};