const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Discord Support Jail Karantina Sistem').setDescription(`
\`!!jail-log [#kanalEtiket]\` **|** \`!!jail-log-kapat\`
Jail sistemi için gereklidir. **Karantina** kanalını seçmeniz gerekiyor.

\`!!jail-yetkili-role [@rolEtiket]\`
Jaili **kullanacak yetkili** rolünü etiketle

\`!!jail-karantina-role [@rolEtiket]\`
Jail **karantina rolünü** etiketle`)
.addField('ᅠ', 'ᅠ')
.addField('Jail Komutu', `!!cezalı, !!cezalı, !!jail`)
.addField('Örnek Karantina komut', `\`\`\`!!jail @etiket\`\`\``)
.addField('ᅠ', 'ᅠ')// xd
.addField('Jail den çıkarmak isterseniz', `\`!!k-erkek\`, \`!!k-kadın\`\n**Komutları aktif etmek için:** \`!!erkek-role [@roleEtiket]\` **-** \`!!kadın-role [@roleEtiket]\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistem'
};