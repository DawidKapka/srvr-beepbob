"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var AdminCommands_1 = require("./commands/AdminCommands");
var RankCommands_1 = require("./ranks/RankCommands");
var dotenv = require("dotenv");
dotenv.config();
var client = new discord_js_1.Client();
var adminCommands = new AdminCommands_1.AdminCommands();
var rankCommands = new RankCommands_1.RankCommands();
console.log(process.env['DISCORD_TOKEN']);
client.login('ODM2OTk4NDk2NDY4NzI5ODY2.YImJmA.-tlIled8r2frTMjyiJpIgTJWYPw');
client.on('message', function (message) {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        if (message.content.startsWith('!mute'))
            adminCommands.toggleMute(message, true);
        if (message.content.startsWith('!unmute'))
            adminCommands.toggleMute(message, false);
        if (message.content === '!clear') {
            adminCommands.clearChat(message);
        }
    }
    //only pls meme in meme channel
    if (message.channel.id === '837378944801046578')
        if (message.author.id !== '836998496468729866' && message.author.id !== '270904126974590976')
            if (!message.content.startsWith('pls meme')) {
                message.delete();
                message.reply('Only "pls meme" command allowed in this channel!');
            }
});
client.on('guildMemberAdd', function (member) {
    rankCommands.setInitRank(member);
});
