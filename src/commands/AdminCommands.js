"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCommands = void 0;
var AdminCommands = /** @class */ (function () {
    function AdminCommands() {
    }
    AdminCommands.prototype.toggleMute = function (message, mute) {
        var mutedRole = message.guild.roles.cache.get('837055852518178866');
        var target = message.mentions.members.first();
        if (!mutedRole)
            message.channel.send('There is no Muted-Role in this Server :/');
        else {
            if (!target)
                message.channel.send('No User specified');
            else {
                if (mute) {
                    target.roles.add(mutedRole);
                    message.channel.send(target.user.username + " has been muted.");
                }
                else {
                    target.roles.remove(mutedRole);
                    message.channel.send(target.user.username + " has been unmuted.");
                }
            }
        }
    };
    AdminCommands.prototype.clearChat = function (message) {
        var amount = Number(message.content.split(' ').pop());
        if (amount < 0 || amount > 100)
            message.reply('Enter a number between 0 and 100');
        else {
            message.channel.messages.fetch({ limit: amount }).then(function (messages) {
                if (message.channel.type == 'text') {
                    message.channel.bulkDelete(amount);
                }
            });
            message.reply("Deleted " + amount + " messages.");
        }
    };
    return AdminCommands;
}());
exports.AdminCommands = AdminCommands;
