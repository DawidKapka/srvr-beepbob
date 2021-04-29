"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankCommands = void 0;
var RankCommands = /** @class */ (function () {
    function RankCommands() {
    }
    RankCommands.prototype.setInitRank = function (member) {
        var initRank = member.guild.roles.cache.get('778358416925786122');
        member.roles.add(initRank);
    };
    return RankCommands;
}());
exports.RankCommands = RankCommands;
