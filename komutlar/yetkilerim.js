const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:hayir:647108300730531851>"
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:hayir:647108300730531851>"
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:hayir:647108300730531851>"
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:hayir:647108300730531851>"
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:hayir:647108300730531851>"
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:hayir:647108300730531851>"
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:hayir:647108300730531851>"
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:hayir:647108300730531851>"
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:hayir:647108300730531851>"
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:hayir:647108300730531851>"
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:evet:647108299489280001>"
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:hayir:647108300730531851>"
    

  let embed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(`Yetkilerin:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    return msg.channel.sendEmbed(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};