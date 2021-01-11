const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel Yardım Komutları\`**
» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}say\`: **Üye Durum Grafiğini Gösterir**
» \`${prefix}i\`: **Botun Bilgilerini Gösterir**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**
» \`${prefix}say\`: **Sunucu Bilgilerini Gösterir**
» \`${prefix}davet\`: **Botu Kendi Sunucunuza Ekleyin**
`)

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
  name: "genel",
  description: 'yardım kodu.',
  usage: 'yardım'
};