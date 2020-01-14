const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
let ip = args[0]
if (!ip) return message.reply(`Lütfen bir IP Adresi belirtin.`)

var query = require('game-server-query');
query(
    {
        type: 'csgo',
        host: ip
    },
    function(bilgi) {
        if(bilgi.error){
      message.channel.send("Sunucu bulunamadı");
    }
        else {
          let botsayısı;
let botlar = bilgi.bots.length
if (botlar = 0) botsayısı = "Sunucuda bot oyuncu bulunmamakta"
          
const embed = new Discord.RichEmbed()
.setAuthor(bilgi.name, message.author.avatarURL)
.addField("Harita;", bilgi.map)
.addField("Oyuncu Sayısı;", `${bilgi.raw.numplayers}/${bilgi.maxplayers}`)
.addField("BOT Oyuncu Sayısı;", bilgi.raw.numbots)
.addField("Sunucu IP", bilgi.query.host)
.setColor("RANDOM")
message.channel.send(embed)
    }
    }
);
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgo-sunucu'],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'csgo1',
  description: 'CSGO Sunucu istatistiklerini gösterir',
  usage: 'csgo-sunucu-bilgi [IP]'
};