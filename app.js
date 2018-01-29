const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json')

bot.on('ready', () => {
    console.log('online oldum!');
});

let prefix = '+'
bot.on('message', message => {
   if(!message.content.startsWith(prefix)) return;
   if(message.author.bot) return;
   let args = message.content.split(' ').slice(1)
   let sonuc = args.join(' ');

   if(message.content.startsWith(prefix + 'ping')) {
        message.channel.send(prefix + 'ping');
    } else
     
   if(message.content.startsWith(prefix + 'send')) {
        message.guild.channels.get('406869612295356416').send('Yan kanaldan **SELAMLAR**!');
    } else

   if(message.content.startsWith(prefix + 'setgame')) {
        if(!sonuc) {
            sonuc = null
        }
        bot.user.setActivity(sonuc)
    } else

    if(message.content.startsWith(prefix + 'durum')) {
        if(!sonuc) {
            sonuc = 'online'
        }
        bot.user.setStatus(sonuc)
    }
});


bot.login(settings.token);