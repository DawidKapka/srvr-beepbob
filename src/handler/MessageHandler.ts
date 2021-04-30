import { Client, GuildMember, Message, MessageFlags } from 'discord.js';

const prefix = '!'

export class MessageHandler {
    handle(message: Message, commands, client: Client) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandStr = args.shift().toLowerCase()
        const command = commands.get(commandStr)
        if (command.admin) {
            if (this.checkAdmin(message.member)) {
                command.execute(client, message, args, commands)
            }
        } 
        else command.execute(client, message, args, commands)
        
    }

    checkMessageForChannels(message:Message) {
        this.checkMessageForMemeChannel(message)
    }

    checkAdmin(member: GuildMember) {
        return member.hasPermission('ADMINISTRATOR')
    }

    checkMessageForMemeChannel(message: Message) {
        if(message.channel.id === '837378944801046578')
        if(message.author.id !== '836998496468729866' && message.author.id !== '270904126974590976')
            if(message.content !== 'pls meme') {
                message.delete()
                message.reply('Only "pls meme" commands allowed in this channel!')
                setTimeout(() => { message.channel.messages.fetch().then(messages => {
                    messages.first().delete()
                })}, 2000)
            }
    }
} 