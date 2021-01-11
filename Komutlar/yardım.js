const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Yardım Komutları\`**

» \`${prefix}kullanıcı  \`: **Genel Komutları Gösterir**

» \`${prefix}eğlence \`: **Eğlence Komutlarını Gösterir**

» \`${prefix}kayıt  \`: **Kayıt komutlarını Gösterir**

» \`${prefix}müzik  \`: **Müzik komutlarını Gösterir**

» \`${prefix}yetkili\`: **Yetkili Komutlarını Gösterir**

» \`${prefix}davet-yardım \`: **Davet Komutlarını Gösterir**`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};