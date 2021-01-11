const chalk = require('chalk');
const moment = require('moment');
const emirhan = require('discord.js');//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
  client.user.setActivity(`👉 Discord | Support|  👈`, { type: "WATCHING"}); 
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR


  client.user.setActivity(`👉 Discord | Support |  👈 / !!davet Yazarak Beni Sunucuna Ekleyebilirsin`);

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
