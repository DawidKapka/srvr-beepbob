module.exports = {
    name: "clear",
    description: "Delete last x messages (Syntax: !clear [amount (default = 10)])",
    admin: true,
    execute(client, message, args, commands) {
        let amount = 0
        if (args > 0) amount = args[0]
        else amount = 10
        if (amount <= 0 || amount > 100) 
            message.reply('Enter a number between 1 and 100')
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