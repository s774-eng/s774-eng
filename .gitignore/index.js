const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = ('/')

bot.on('ready', function () {
  console.log("Connected")
  bot.user.setActivity('Joue à Ligue Of Fortnite').catch(console.error)
});

bot.login('NjM4NDk2MTI1ODY2OTk5ODE4.XbhYkg.4fe9LCycvWf_oDAfCs6XJchO0EM');
