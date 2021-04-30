module.exports = {
    name: 'ping',
    description: 'Ping',
    admin: false,
    execute(client, message, args, commands) {
        message.reply('Pong')
    }
}