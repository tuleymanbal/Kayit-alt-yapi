const Discord = require('discord.js');
const db = require('quick.db')
 //CodeArius
exports.run = async (client, message, args) => {
  let kayityetkili = 'yetkilirol' //Kayıt yetkilisi İD
  if(!message.member.roles.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
   //CodeArius
  let member = message.mentions.users.first();
    if(!member) return message.channel.send('Bir kişiyi etiketlemelisin')
    let codeariuseski = await db.fetch(`eskiad_${member.id}`) || 'Eski ismi yok'
    let toplamik = await db.fetch(`toplamik_${member.id}`) || '0'
    let kayıtlılar = new Discord.RichEmbed()
      .setColor('BLUE') //CodeArius
      .setAuthor(`${member.tag}`, member.avatarURL)
      .setDescription(`Bu üyenin toplamda \`${toplamik}\` isim kayıtı bulundu:

\`${codeariuseski.join('\n')}\``)
      .setThumbnail('https://cdn.discordapp.com/icons/544527577768001538/a_1fa32517dd9fb1d265309255c635b2c0.gif')
    message.channel.send(kayıtlılar) //CodeArius
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'isimler',
  description: "kişinin eski isimlerini gösterir",
  usage: 'isimler @kişi'
}