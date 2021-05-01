module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("Please specify the bug`");   
  if (args[0] === "bug") return message.reply("Please specify the bug");   
  args = args.join(" ");   
  message.reply("Thanks for submitting a bug!");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\`\`\``;   
  client.channels.cache.get('818135844753899592').send(content)
}
}