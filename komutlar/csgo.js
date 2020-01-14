const source = require('gamedig');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  try {
    let mesaj = args.slice(0).join(' ')

  let eee = mesaj.split(':');
    let host = eee[0];

    if (host === '127.0.0.1') {
const embed = new Discord.RichEmbed()
.setDescription('`127.0.0.1` böyle bir sunucu yok.')
      return message.channel.send(embed);
    }

    let port = eee[1] ? parseInt(eee[1]) : 27015;

    let data = await source.query({
      type: 'csgo',
      host: host,
      port: port
    });

    let stats = [
      {
        name: 'Server IP',
        value: `\`${host}:${port}\``,
        inline: true
      },
      {
        name: 'Oyuncular',
        value: `${data.players.length}/${data.maxplayers}`,
        inline: true
      },
      {
        name: 'Harita',
        value: data.map
      }
    ];

    if (data.players.length > 0) {
      let players = [];
      let scores = [];
      let playtimes = [];
      for (let i = 0; i < data.players.length; i++) {
        players.push(data.players[i].name);
      }
      for (let i = 0; i < data.players.length; i++) {
        scores.push(data.players[i].score);
      }
      for (let i = 0; i < data.players.length; i++) {
        playtimes.push(`${parseInt(data.players[i].time)}s`);
      }
      stats.push(
        {
          name: 'Oyuncu',
          value: `\`\`\`http\n${players.join('\n')}\`\`\``,
          inline: true
        },
        {
          name: 'Katıl',
          value: `<steam://connect/${host}:${port}>`
        }
      );
    }

    let footer;
    if (data.password) {
      footer = {
        text: 'Gizli Sunucu',
        icon_url: 'https://cdn.glitch.com/77274e00-37f5-4de6-a341-1f37d56e6596%2Flock.png?v=1569160788055'
      };
    }

    message.channel.send({
      embed: {
        color: 0x36393E,
        title: data.name,
        description: '[Counter-Strike: Global Offensive](https://store.steampowered.com/app/730/)',
        fields: stats,
        footer: footer
      }
    });
  }
  catch (e) {
    if (e.toString() === 'UDP Watchdog Timeout') {
      return message.reply('bilinmeyen ip. Lütfen doğru ip giriniz.')
    }
    throw e;
  }
};

exports.conf = {
  aliases: [ 'csgo' ],
  enabled: true,
  guildOnly: false,
permLevel: 0
};

exports.help = {
  name: 'csgo',
  description: 'CSGO serveri hakkında istatistikleri öğrenirsiniz.',
  usage: 'csgo <ip:port>'
};