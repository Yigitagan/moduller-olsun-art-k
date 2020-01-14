const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    
    if (args[0] == 'prostitute') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 rastgele sayı. ne istersen

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, bir fahişe olarak çalıştın ve maaşını aldın ${amount}$ seks yapmak için! :D`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 rastgele sayı. ne istersen

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, yapıcı olarak çalıştınız ve para aldınız ${amount}$ imparatorluk devlet binasını yeniden inşa etmek için.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 rastgele sayı. neyi istersen değiştir

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, destansı oyunlar için programcı olarak çalıştın, oyunlarını düzelttin ve kazandın  ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }






    // basit iş komutu
    /*
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 rastgele sayı.
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}, Ödendi!`, message.author.displayAvatarURL) 
    .setDescription(`${message.author}, çalıştın ve kazandın ${amount}$ !`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    */


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'iş',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};