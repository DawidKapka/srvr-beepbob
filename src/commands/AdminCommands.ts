import { Channel, Client, Message } from 'discord.js';

export class AdminCommands {
    toggleMute(message: Message, mute: boolean) {
        const mutedRole = message.guild.roles.cache.get('837055852518178866');
        const target = message.mentions.members.first();

        if (!mutedRole) message.channel.send('There is no Muted-Role in this Server :/')
        else {
            if (!target) message.channel.send('No User specified')
            else {
                if(mute) {
                    target.roles.add(mutedRole);
                    message.channel.send(`${target.user.username} has been muted.`)
                } else {
                    target.roles.remove(mutedRole);
                    message.channel.send(`${target.user.username} has been unmuted.`)
                }
            }
        }
    }
    clearChat(message: Message){
        const amount: number = Number(message.content.split(' ').pop())
        if (amount < 0 || amount > 100) 
            message.reply('Enter a number between 0 and 100')
        else {
            message.channel.messages.fetch({limit: amount}).then(messages => {
                if (message.channel.type == 'text') {
                    message.channel.bulkDelete(amount)
                }
            })
            message.reply(`Deleted ${amount} messages.`)
        }       
    }
}
