const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('online oldum!');
});

bot.on('message',msg => {
    if(msg.content === 'ping') {msg.reply('Pong');}
});


bot.login('NDAxNDU2OTQ0Mjg1NjE0MDgw.DU5ApQ.cQ95aPtFpzkNhnSzBL_HV31aid8');