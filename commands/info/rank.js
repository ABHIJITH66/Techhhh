
const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');
const moment = require('moment');


module.exports = {
  name: "rank",
  aliases: [""],
  description: "shows your Rank!",
  usage: "rank",
  category: "Members",
  run: async (client, message, args) => {
   
         const leaderboard = await message.client.levels.getLeaderboard(message.guild);

        function cmpFunction(item) {
            return item.user == message.author.id;
        }

        const currentExp = leaderboard.find(cmpFunction).exp,
            currentRank = leaderboard.findIndex(cmpFunction) + 1,
            currentLevel = message.client.levels.getLevelFromExp(currentExp),
            levelExp = message.client.levels.getLevelExp(currentLevel),
            currentLevelExp = message.client.levels.getLevelProgress(currentExp);

        let embed = new MessageEmbed({
            title: 'Level progress',
            color: 0xE7F135,
            timestamp: moment().format('LLL'),
            footer: {
                icon_url: message.author.displayAvatarURL(),
                text: message.author.tag
            },
            fields: [
                {
                    name: 'Rank',
                    value: `${currentRank}/${leaderboard.length}`,
                    inline: true
                },
                {
                    name: 'Level',
                    value: currentLevel,
                    inline: true
                },
                {
                    name: 'Exp',
                    value: `${currentLevelExp}/${levelExp} (tot. ${currentExp})`,
                    inline: true
                }
            ],
        });

        message.channel.send({embed});
    }
};