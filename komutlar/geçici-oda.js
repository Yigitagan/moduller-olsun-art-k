const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Yeterli yetki bulunmamakta.")
    let Kanal = args[0];
    if(!Kanal) return message.reply("Bir kanal adı belirtiniz.")
    let Süre = args[1];
    if(!Süre) return message.reply("Bir süre belirtiniz.")

    let Kanal1 = await message.guild.createChannel(Kanal, "voice")
    message.channel.send(`\`${Kanal1.name}\` adlı kanal, oluşturuldu.`)

    setTimeout(() => {

        message.guild.channels.get(Kanal1.id).delete();
        message.channel.send(`\`${Kanal1.name}\` adlı kanal, kaldırıldı.`)

    }, ms(Süre))

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['geçici-kanal'],
    permLevel: 0
};

  exports.help = {
    name: 'geçici-oda',
    description: 'Nope.',
    usage: 'süreli-kanal'
};