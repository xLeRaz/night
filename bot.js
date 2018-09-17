const dateFormat = require('date-format');
const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms');
const fs = require('fs');
const night = new Discord.Client({disableEveryone: true, maxMessagesCache: 1});

night.on('ready',async () => {
  console.log(`.Servers: ${night.guilds.size}`);
  if(night.guild.size === 0) return night.generateInvite(['ADMINISTRATOR']).then(i => console.log(i));
});


night.login(process.env.NIGHT);
