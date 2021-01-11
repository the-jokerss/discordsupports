const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Yetkili Komutları\`**
» \`${prefix}ban-sistem\`: **Ban Sistemini Görebilirsiniz**

» \`${prefix}jail-sistem\`: **Jail Sistemini Görebilirsiniz**

» \`${prefix}mute-sistem\`: **Mute Komutları Açılır**

» \`${prefix}toplu-rol-sistem\`: **Toplu Rol Komutlarını Görebilirsiniz**

» \`${prefix}unban <id>\`: **Belirtilen İD Deki Kişinin Sunucudan Yasağını Kaldırır**

» \`${prefix}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}ban-say\`: **Sunucudakı Banlanan Üye Sayısını Gösterir**`)

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
  name: "yetkili",
  description: 'yardım kodu.',
  usage: 'yardım'
};