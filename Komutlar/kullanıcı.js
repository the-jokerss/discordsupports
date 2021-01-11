const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Yardım Komutları\`**

» \`${prefix}aşk \`: **Genel Komutları Gösterir**

» \`${prefix}avatar \`: **Kullanıcı Komutlarını Gösterir**

» \`${prefix}kullanıcı-bilgi \`: **Eğlence Komutlarını Gösterir**

» \`${prefix}davet \`: **Kayıt komutlarını Gösterir**

» \`${prefix}müzik  \`: **Müzik komutlarını Gösterir**

» \`${prefix}up\`: **Yetkili Komutlarını Gösterir**

» \`${prefix}öp\`: **Etiketlediğiniz Kişiyi Öpersiniz**`)

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
  name: "kullanıcı",
  description: 'yardım kodu.',
  usage: 'yardım'
};