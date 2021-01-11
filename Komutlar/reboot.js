const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "722805491495075901") return message.channel.send("Bu Komutu Sadece Sahibim Kullanabilir!")
    
    message.channel.sendMessage(`Tüm Kodlar Ve Modüller Yeniden Başlatılıyor...`).then(msg => {
    console.log(`Tüm Kodlar Ve Modüller Yeniden Başlatılıyor...`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Botunuzu yeniden başlatır....',
  usage: 'reboot'
};