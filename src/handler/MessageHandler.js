"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHandler = void 0;
var RankCommands_1 = require("../commands/RankCommands");
var AdminCommands_1 = require("../commands/AdminCommands");
var rankCommands = new RankCommands_1.RankCommands();
var adminCommands = new AdminCommands_1.AdminCommands();
var MessageHandler = /** @class */ (function () {
    function MessageHandler() {
    }
    MessageHandler.prototype.handle = function (message) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (message.content.startsWith('!mute'))
                adminCommands.toggleMute(message, true);
            if (message.content.startsWith('!unmute'))
                adminCommands.toggleMute(message, false);
            if (message.content === '!clear') {
                adminCommands.clearChat(message);
            }
        }
    };
    MessageHandler.prototype.checkMessageForChannels = function (message) {
        if (message.channel.id === '837378944801046578')
            if (message.author.id !== '836998496468729866' && message.author.id !== '270904126974590976')
                if (message.content !== 'pls meme') {
                    message.delete();
                    message.reply('Only "pls meme" commands allowed in this channel!');
                }
    };
    return MessageHandler;
}());
exports.MessageHandler = MessageHandler;
