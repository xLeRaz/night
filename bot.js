const dateFormat = require('date-format');
const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms');
const fs = require('fs');
const night = new Discord.Client({disableEveryone: true, maxMessagesCache: 1});
const prefix = "!";
night.on('ready',async () => {
  console.log(`.Servers: ${night.guilds.size}`);
  night.generateInvite(['ADMINISTRATOR']).then(i => console.log(i));
});

night.on('message',async (message) => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let mention = message.mentions.users.first() || message.author;
  let args = message.content.split(' ');
  let author = message.author;
  if(args[0] === `${prefix}` && !args[1]) {
    let dev = night.emojis.find(r => r.name === 'Developer');
    let website = night.emojis.find(r => r.name === 'Website');
    let avatar = night.emojis.find(r => r.name === 'Avatar');
    let discord = night.emojis.find(r => r.name === 'Discord');

    let servers = night.emojis.find(r => r.name === 'Servers');
    let users = night.emojis.find(r => r.name === 'Users');
    let channels = night.emojis.find(r => r.name === 'Channels');
    let commands = night.emojis.find(r => r.name === 'Commands');

    let embed = new Discord.RichEmbed()
    .setTitle(` \`نايت بوت\`. هو بوت يساعدك على ادارة سيرفرك`)
    .addField('Info:', `${dev} **Developer:** \`xYouseeF'₁₁ || Roýale.#0001\`\n${website} **Website: [Github](https://github.com/xLeRaz)**\n${discord} **Official Server: [discord.gg/hPYywCR](https://discord.gg/hPYywCR)**\n${avatar} **Avatar:** Made by \`${night.users.find(owner => owner.id === '475396751549792277').tag}\`` ,true)
    .addField('Stats:', `${servers} **Servers:** \`${night.guilds.size}\`\n${users} **Users:** \`${night.users.size}\`\n${channels} **Channels:** \`${night.channels.size}\`\n${commands} **Commands:** \`4\`` ,true)
    .setFooter('Made By: xYouseeF\'₁₁ || Roýale.#0001');

    message.channel.send(embed);
  }
});

night.login(process.env.NIGHT);
