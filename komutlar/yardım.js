const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları:**", `\!avatarım = Avatarınınızı Gösterir. \!kralol = Kral Olursunuz.\!öldür = Seçili Oyuncuyu Öldürürsünüz. \!mc-ödül = Başarım Alırsınız.\!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \!istatistik = Sunucunuzun İstatistiğini Öğrenirsiniz. \!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir.`)
  .addField("**Moderasyon Komutları**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \!kick  = İstediğiniz Kişiyi Sunucudan Atar. \!mute = İstediğiniz Kişiyi Susturur. \!oyla = Oylama Açar. \!duyuru = Güzel Bir Duyuru Görünümü Sağlar.\!otorol = Otorol Ayarlarsınız. \!sayaç Sayaç Ayarlarsınız.\!rol = Seçili Rolü Oyunucuya Verirsiniz.!sunucudavet = Bulunduğunuz Sunucunun Davet Linkini Atar.`)
  .addField("**Ana Komutlar**", "!yardım = BOT Komutlarını Atar. \!probilgi = BOT Kendisi Hakkında Bilgi Verir. \!pdavet = BOT Davet Linkini Atar.")
  .addField("**Yapımcı**", " **yigit26#0777** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};