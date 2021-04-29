"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var MessageHandler_1 = require("./handler/MessageHandler");
var UserHandler_1 = require("./handler/UserHandler");
var client = new discord_js_1.Client();
var messageHandler = new MessageHandler_1.MessageHandler();
var userHandler = new UserHandler_1.UserHandler();
client.login('ODM2OTk4NDk2NDY4NzI5ODY2.YImJmA.-tlIled8r2frTMjyiJpIgTJWYPw');
client.on('message', function (message) {
    //only pls meme in meme channel
});
client.on('guildMemberAdd', function (member) {
    userHandler.handleNewMember(member, client);
});
