"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var MessageHandler_1 = require("./handler/MessageHandler");
var UserHandler_1 = require("./handler/UserHandler");
var client = new discord_js_1.Client();
var messageHandler = new MessageHandler_1.MessageHandler();
var userHandler = new UserHandler_1.UserHandler();
var config = require('../config.json');
client.login(config.token);
client.on('message', function (message) {
    messageHandler.checkMessageForChannels(message);
    messageHandler.handle(message);
});
client.on('guildMemberAdd', function (member) {
    userHandler.handleNewMember(member, client);
});
