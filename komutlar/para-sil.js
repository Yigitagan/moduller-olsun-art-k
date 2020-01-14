const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
 // just copy & paste it in here.

    if (message.author.id != "401797698799271948","415148312434442240","") return message.reply('Bunu Sadece Sahibim Kullanabilir');
    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    db.subtract(`para_${user.id}`, args[0]) // subtract it now
    let bal = await db.fetch(`para_${user.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)
},
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'para-sil',
  description: 'Günlük ödül alırsınız.',
  usage: 'günlük',
   
};