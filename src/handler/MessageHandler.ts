import { Client, GuildMember, Message, MessageFlags } from 'discord.js';

const prefix = '!'
const ids = require('../resources/id.json')

export class MessageHandler {
    handle(message: Message, commands, client: Client) {
        if (commands.find(c => c.name === message.content.slice(prefix.length))) {
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
        } else {
            if (message.content.startsWith(prefix) && !message.author.bot)
                message.reply(`Sorry, "${message}" is not a valid command.`);
        }
        
    }

    checkMessageForChannels(message:Message) {
        this.checkMessageForMemeChannel(message)
        this.checkMessageForMusicChannel(message)
    }

    checkAdmin(member: GuildMember) {
        return member.hasPermission('ADMINISTRATOR')
    }

    checkMessageForMemeChannel(message: Message) {
        if(message.channel.id === ids.memeChannelId)
            if(message.author.id !== ids.botId && message.author.id !== ids.dev_botId && message.author.id !== ids.dankMemerId)
                if(message.content !== 'pls meme') {
                    message.delete()
                    message.reply('Only "pls meme" commands allowed in this channel!')
                    setTimeout(() => { message.channel.messages.fetch().then(messages => {
                        if (messages.first().author.id === ids.botId || messages.first().author.id === ids.dev_botId)
                            messages.first().delete()
                    })}, 2000)
                }
    }

    checkMessageForMusicChannel(message: Message) {
        if(message.channel.id === ids.musicChannelId)
            if (message.author.id !== ids.botId && message.author.id !== ids.dev_botId && message.author.id !== ids.groovyId)
                if (!message.content.startsWith('-')) {
                    message.delete()
                    message.reply('Only Groovy-Commands (-) allowed in this channel!')
                    setTimeout(() => { message.channel.messages.fetch().then(messages => {
                        if (messages.first().author.id === ids.botId || messages.first().author.id === ids.dev_botId)
                            messages.first().delete()
                    })}, 2000)
                }
    }
} 