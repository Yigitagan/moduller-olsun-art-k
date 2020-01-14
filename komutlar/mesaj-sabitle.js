exports.run = async (client, message, args, level) => {
  try {
    message.channel.fetchMessages({limit: 2}).then(async messages => {
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
      if (!Array.from(messages.keys())[1]) return message.reply('Bir mesaj göndermelisin ');
      let msg = messages.get(Array.from(messages.keys())[1]);
      msg.pin();
      message.channel.send('Mesaj sabitlendi.');
    });
  } catch (err) {
    message.channel.send('Bir hata oluştu!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'sabitle',
  description: 'Mesajınızı sabitler',
  usage: 'pin'
};