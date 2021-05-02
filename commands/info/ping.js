module.exports = {
name: "ping",
  aliases: ["pg"],
  description: "Check the ping",
  usage: "ping",
  run: async (client, message, args) => {
    //Start
    message.delete();
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}