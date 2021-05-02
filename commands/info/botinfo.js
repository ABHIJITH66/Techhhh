const { MessageEmbed }= require('discord.js');
const { color} = require ("../../config.js");
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
module.exports = {
    name: "botinfo",
    aliases: ["bi"],
    category: "info",
    usage: "ping",
    description: "Information abut bot",
    run: async (client, message, args) => {
        
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const clientStats = stripIndent`
      Name      :: Tech Mod
      Servers   :: ${message.client.guilds.cache.size}
      Users     :: ${message.client.users.cache.size}
      Channels  :: ${message.client.channels.cache.size}
      WS Ping   :: ${Math.round(message.client.ws.ping)}ms
      CREATER   :: ABHIJITH#6408
    `;
    const { totalMemMb, usedMemMb } = await mem.info();
    const serverStats = stripIndent`
      OS        :: ${await os.oos()}
      CPU       :: ${cpu.model()}
      Cores     :: ${cpu.count()}
      CPU Usage :: ${await cpu.usage()} %
      RAM       :: ${totalMemMb} MB
      RAM Usage :: ${usedMemMb} MB 
    `;
    
    const embed = new MessageEmbed()
      .setTitle('INFORMATION ABOUT BOT')
      .addField('BasicInfo', `\`\`\`asciidoc\n${clientStats}\`\`\``)
      .addField('ServerInfo', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(color);
     message.channel.send(embed);
    }
}

      