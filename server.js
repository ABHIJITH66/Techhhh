const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
require("./server.js");
const { Prefix, Token, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");
const moment = require("moment")
const db = require("quick.db")
var jimp = require('jimp');
const canvas = require("discord-canvas");

//-----database-------ap
const { Default_Prefix, Support, Owner, WelcomeImage, LeaveImage } = require("./config.js");

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send("You must specify a valid id for the welcome channel!")
	 
 try{
	 bot.guilds.get(message.guild.id).channels.get(cArgs).send("Welcome channel set!")
	 
 db.set(`${message.guild.id}`, cArgs)
 
 message.channel.send("You have successfully set the welcome channel to <#" + cArgs + ">")
return;
 }catch(e){
	return message.channel.send("Error: missing permissions or channel doesn't exist")
 }
 
 
}
module.exports.help = {
  name: "channel"
}
client.on("ready", async () => { console.log(`ready!`); client.user .setActivity(`USE =help FOR HELP`, { type: "PLAYING" }) .catch(error => console.log(error)); });
//hi


//command 



let modules = ["fun",'info', "moderation"];
modules.forEach(function(module) {
fs.readdir(`./commands/${module}`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${module}/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});
});
//-
  
client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));



 //welcome 



//end welcome

//c 
// Default

// Custom
let SnakeGame = require("discord-snakegame");
SnakeGame = new SnakeGame({ backg: "🟫", snake: "🟠", snakeTail: "🟡", apple: "🍎" });


client.login(Token);