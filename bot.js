night.on('message',async (message) => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let dev = night.emojis.find(r => r.name === 'Developer');
  let website = night.emojis.find(r => r.name === 'Website');
  let avatar = night.emojis.find(r => r.name === 'Avatar');
  let discord = night.emojis.find(r => r.name === 'Discord');
  let servers = night.emojis.find(r => r.name === 'Servers');
  let users = night.emojis.find(r => r.name === 'Users');
  let channels = night.emojis.find(r => r.name === 'Channels');
  let commands = night.emojis.find(r => r.name === 'Commands');
  let greentick = night.emojis.find(r => r.name === 'GreenTick');
  let redtick = night.emojis.find(r => r.name === 'RedTick');
  let mention = message.mentions.users.first() || message.author;
  let args = message.content.split(' ');
  let author = message.author;
  if(args[0] === `${prefix}` && !args[1]) {

    let infoEmbed = new Discord.RichEmbed()
    .setTitle(`**${night.user.username}** is a **multifunction** bot which helps you to **moderate** and **have some fun** in your server`)
    .addField('Info:', `${dev} **Developer:** \`- iAmYouseFx'₁₁#0001\`\n${website} **Website: [Github](https://github.com/xLeRaz)**\n${discord} **Official Server: [discord.gg/hPYywCR](https://discord.gg/hPYywCR)**\n${avatar} **Avatar:** Made by \`- iAmYouseFx'₁₁#0001\`` ,true)
    .addField('Stats:', `${servers} **Servers:** \`${night.guilds.size}\`\n${users} **Users:** \`${night.users.size}\`\n${channels} **Channels:** \`${night.channels.size}\`\n${commands} **Commands:** \`4\`` ,true)
    .setFooter(`- iAmYouseFx'₁₁#0001`, night.users.find(owner => owner.id === '475396751549792277').avatarURL);

    message.channel.send(infoEmbed);
  } else if(args[0] === `${prefix}server`) {
    let bansSize = 0;
    let levels = ['ولا شئ', 'منخفض', 'متوسط' , 'مرتفع', 'مرتفع جدا'];
    message.guild.fetchBans().then((bans, err) => {
      bansSize = bans.size;
    let iEmbed = new Discord.RichEmbed()
    .setAuthor(author.username, author.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .addField(`🔑 » مالك السيرفر`, `${message.guild.owner}\n${moment(message.guild.createdAt).format('lll')}`, true)
    .addField(`🌍 » موقع السيرفر`, `${message.guild.region}\n${moment(message.guild.createdAt).locale('ar-EG').fromNow()}`, true)
    .addField(`👥 » أعضاء السيرفر`, `${night.emojis.find(r => r.name === 'online')} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` ${night.emojis.find(r => r.name === 'idle')} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` ${night.emojis.find(r => r.name === 'dnd')} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` ${night.emojis.find(r => r.name === 'offline')} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\``, true)
    .addField(`🔐 » رتب السيرفر`, `${night.emojis.find(r => r.name === 'Channels')} **Total.** \`${message.guild.roles.size}\`${night.emojis.find(r => r.name === 'Avatar')} **Colors.** \`${message.guild.roles.filter(r => !isNaN(r.name)).size}\``, true)
    .addField('⚒ » إدارة السيرفر', `- **Bans.** ${bansSize}\n- **Verification.** ${message.guild.verificationLevel} , \`${levels[message.guild.verificationLevel]}\``, true)
    .addField(`🉐 » اي دي السيرفر`, `\`${message.guild.id}\``, true)
    .setColor('BLACK')

    message.channel.send(iEmbed);
  }).catch(e => { bansSize = 0; });
} else if(args[0] === `${prefix}rename`) {
  let role = message.guild.roles.find(r => r.name === args.slice(1).join(' ')) || message.mentions.roles.first();
  if(!role) return message.channel.send('- هذه الرتبة غير موجودة');
  let m = await message.channel.send('- أكتب اسم الرتبة الجديدة الان');
  let awaitng = await message.channel.awaitMessages(r => r.author.id == message.author.id, {time: 30000, errors: ['time']}).then(c => {
    let name = c.first().content;
    role.edit({
      name: name
    }).then(() => {
      message.channel.send('- تم تغيير اسم الرتبة');
    }).catch(e => message.channel.send('- لم اقدر على تغيير اسم الرتبة'));
  });
}
});
