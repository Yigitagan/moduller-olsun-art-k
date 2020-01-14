const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let tag = args[0];
  let kanal = message.mentions.channels.first();
  if (!tag) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir tag belirtiniz!`)
        .setColor("BLACK")
    );
  }
  if (!tag) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir kanal belirtiniz!`)
        .setColor("BLACK")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Ototag kanalı; ${kanal}\nTagı; ${tag} olarak ayarlandı!`);
  message.channel.send(embed);

  db.set(`ototagk_${message.guild.id}`, kanal.id);
  db.set(`ototag_${message.guild.id}`, tag);
};

module.exports.conf = {
  aliases: ["ototag"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-tag",
  description: "Etiketlenen şahsa etiketlenen rolü alırsınız.",
  usage: "oto-tag"
};