import { Message } from 'discord.js';
import { RankCommands } from '../commands/RankCommands';
import { AdminCommands } from '../commands/AdminCommands';

const rankCommands = new RankCommands();
const adminCommands = new AdminCommands();

export class MessageHandler {
    handle(message: Message) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if(message.content.startsWith('!mute'))
                adminCommands.toggleMute(message, true)
            if (message.content.startsWith('!unmute'))
                adminCommands.toggleMute(message, false)
    
            if(message.content === '!clear') {
                adminCommands.clearChat(message);
            }
        }
    }

    checkMessageForChannels(message:Message) {
        if(message.channel.id === '837378944801046578')
            if(message.author.id !== '836998496468729866' && message.author.id !== '270904126974590976')
                if(message.content !== 'pls meme') {
                    message.delete()
                    message.reply('Only "pls meme" commands allowed in this channel!')
                }
    }
} 