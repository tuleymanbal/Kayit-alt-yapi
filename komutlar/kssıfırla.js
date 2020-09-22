const Discord = require("discord.js");
const db = require('quick.db')
  //CodeArius
module.exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first();
  if(!kişi) return message.channel.send('Bir kişiyi etiketlemen gerekli.')
  if(kişi) {  //CodeArius
  message.channel.send(`<<@!${kişi.id}> Kişisinin teyit bilgileri başarıyla sıfırlandı.`)
db.delete(`kayıte_${kişi.id}`)
db.delete(`kayıtk_${kişi.id}`)  //CodeArius
db.delete(`kayıttoplam_${kişi.id}`)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sıfırla'
}