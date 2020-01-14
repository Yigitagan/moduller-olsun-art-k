const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let coin = await db.fetch(`para_${message.author.id}`);
  message.reply(`<a:yesil:647108301279985710> Mevcut Bakiye; \`${coin || '0'}\``)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para',
  description: '',
  usage: ''
};