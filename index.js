const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Ton bot est allumé, sous le nom de ${client.user.tag} !`);
  client.user.setActivity("Héberger par French-Heberg") 
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login("TON TOKEN");
