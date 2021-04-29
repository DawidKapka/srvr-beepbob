import { Client } from 'discord.js';
import { AdminCommands } from './commands/AdminCommands';
import { RankCommands } from './ranks/RankCommands';


const client = new Client();
const adminCommands = new AdminCommands();
const rankCommands = new RankCommands();

client.login('ODM2OTk4NDk2NDY4NzI5ODY2.YImJmA.-tlIled8r2frTMjyiJpIgTJWYPw');

client.on('message', message => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        if(message.content.startsWith('!mute'))
            adminCommands.toggleMute(message, true)
        if (message.content.startsWith('!unmute'))
            adminCommands.toggleMute(message, false)

        if(message.content === '!clear') {
            adminCommands.clearChat(message);
        }
    }
    //only pls meme in meme channel
    if (message.channel.id === '837378944801046578')
        if (message.author.id !== '836998496468729866' && message.author.id !== '270904126974590976')
            if(!message.content.startsWith('pls meme')) {
                message.delete();
                message.reply('Only "pls meme" command allowed in this channel!')
            }
});
client.on('guildMemberAdd', member => {
    rankCommands.setInitRank(member);
})


