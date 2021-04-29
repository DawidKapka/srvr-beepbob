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
    };
    return MessageHandler;
}());
exports.MessageHandler = MessageHandler;
