const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {
  const DBL = require('dblapi.js')
  const dbl = new DBL('TOKEN', client) 
  
  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
      var request = require('request');
      request('https://apiler.glitch.me/api/kaccm', function (error, response, body) {
        if (error) return console.log('Hata:', error);
        else if (!error) {
          var api = JSON.parse(body);
          message.channel.send(`${message.author.username} adlı kullanıcının malafatı ${api.kaccm}`)
        }
      })
      
    } else {
      message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/BOTUNID/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
    }
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaç-cm','kaccm','kac-cm'],
  permLevel: 0
};

exports.help = {
  name: 'cm',
  description: 'Malafatınızın uzunluğunu ölçer.',
  usage: 'kaçcm'
};