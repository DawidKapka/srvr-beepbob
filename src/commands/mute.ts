module.exports = {
    name: "mute",
    description: "Mute User",
    admin: true,
    execute(client, message, args, commands) {
        const mutedRole = message.guild.roles.cache.get('837055852518178866');
        const target = message.mentions.members.first();

        if (!mutedRole) message.channel.send('There is no Muted-Role in this Server :/')
        else {
            if (!target) message.channel.send('No User specified')
            else {
                if(!target.roles.cache.find(r => r.id === mutedRole.id)) {
                    target.roles.add(mutedRole);
                    message.channel.send(`${target.user.username} has been muted.`)
                } else message.channel.send(`Failed: ${target.user.username} is already muted!`)
            }
        }
    }
}