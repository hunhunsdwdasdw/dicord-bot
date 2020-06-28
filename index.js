const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI2NTg5OTg2NzgyMTgzNDg1.XvffvA.f4sPBCiVyLbKz3j8UaEjkRegJ7w';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);