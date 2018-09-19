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
  let dev = night.emojis.get('491840323534848001');
  let website = night.emojis.get('491840323534848001');
  let avatar = night.emojis.get('491840323534848001');
  let discord = night.emojis.get('491840323534848001');
  let servers = night.emojis.get('491840323534848001');
  let users = night.emojis.get('491840323534848001');
  let channels = night.emojis.get('491840323534848001');
  let commands = night.emojis.get('491840323534848001');
  let greentick = night.emojis.get('491840323534848001');
  let redtick = night.emojis.get('491840323534848001');
  let upgrading = night.emojis.get('491840323534848001');
  let editing = night.emojis.get('491840323534848001');
  let mention = message.mentions.users.first() || message.author;
  let args = message.content.split(' ');
  let author = message.author;
  if(args[0] === `${prefix}` && !args[1]) {

    let embed = new Discord.RichEmbed()
    .setTitle(`**${night.user.username}** is a **multifunction** bot which helps you to **moderate** and **have some fun** in your server`)
    .addField('Info:', `${dev} **Developer:** \`${night.users.find(owner => owner === '475396751549792277').tag}\`\n${website} **Website: [Github](https://github.com/xLeRaz)**\n${discord} **Official Server: [discord.gg/hPYywCR](https://discord.gg/hPYywCR)**\n${avatar} **Avatar:** Made by \`${night.users.find(owner => owner === '475396751549792277').tag}\`` ,true)
    .addField('Stats:', `${servers} **Servers:** \`${night.guilds.size}\`\n${users} **Users:** \`${night.users.size}\`\n${channels} **Channels:** \`${night.channels.size}\`\n${commands} **Commands:** \`4\`` ,true)
    .setFooter(`${night.users.find(owner => owner === '475396751549792277').tag}`, night.users.find(owner => owner.id === '475396751549792277').avatarURL);

    message.channel.send(embed);
  } else if(args[0] === `${prefix}id`) {
    
  }
});

night.login(process.env.NIGHT);
