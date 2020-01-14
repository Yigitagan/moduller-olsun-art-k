const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
if (message.author.id != "401797698799271948","415148312434442240","") return message.reply('Bunu Sadece Sahibim Kullanabilir');
  
    let cooldown = 0, 
        amount = Math.floor(Math.random() * 999999999999999) + 99999999999999999999;      

    
        

  
 

      
      
  
        const embed = new Discord.RichEmbed()
        .setTitle("Günlük ödülün!")
        .setDescription(`Günlük Ödülün: **${amount}** Puan`)
        .setColor('BLACK')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
      
        db.add(`para_${message.author.id}`, amount);

      
    }

     

    
    
    
    
    
  
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'enes',
  description: 'Günlük ödül alırsınız.',
  usage: 'günlük',
   
};