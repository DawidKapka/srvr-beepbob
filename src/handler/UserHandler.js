"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
var RankCommands_1 = require("../commands/RankCommands");
var rankCommands = new RankCommands_1.RankCommands();
var UserHandler = /** @class */ (function () {
    function UserHandler() {
    }
    UserHandler.prototype.handleNewMember = function (member, client) {
        rankCommands.setInitRank(member);
        var channel = client.channels.cache.get('837393291775311903');
        if (channel.isText)
            channel.send("Welcome " + member.user.username + "! Have a nice stay :)");
    };
    return UserHandler;
}());
exports.UserHandler = UserHandler;
