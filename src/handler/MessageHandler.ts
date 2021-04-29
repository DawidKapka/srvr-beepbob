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

    }
} 