const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Dlive Yenillikler Menüsü <a:yuvarlak_tk:778555821285441546> ',`
**-nuke** : Tüm mesajları siler.
**-yapımcım** : Yapımcı mı gösterir.
**eklenecek** : Eklenecek.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yenillikler"], 
  permLevel: 0
};
exports.help = {
  name: 'yenillikler'
};