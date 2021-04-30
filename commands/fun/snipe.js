const Discord= require("discord.js");

module.exports = {
  name: "snipe",
  aliases: [],
  category: "Fun",
  description: "A snipe command",
  run:async (client, message, args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .colour: "
    .setdescription(msg.content);
    if (msg.image) embed.set.Image(msg.image);
   return  message.channel.send(embed);
    }
  };