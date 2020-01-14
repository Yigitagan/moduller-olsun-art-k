const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(':x: | Kullanım: `{prefix}giriş-çıkış-ayarla #kanal`')
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/glog.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    message.channel.send(`:white_check_mark: | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    description: 'Giriş Çıkış Kanalını Ayarlar.',
    usage: 'gç-ayarla <#kanal>'
}

