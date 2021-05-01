import { Client } from 'discord.js'
import { MessageHandler } from './handler/MessageHandler'
import { UserHandler } from './handler/UserHandler'
const fs = require('fs')
const Discord = require('discord.js')
const config = require('../config.json')
const messageHandler = new MessageHandler()
const userHandler = new UserHandler()
const client = new Client();
const commands = new Discord.Collection()

initCommands()

client.login(config.token)

client.on('message', message => {
    messageHandler.checkMessageForChannels(message)
    messageHandler.handle(message, commands, client)
});
client.on('guildMemberAdd', member => {
    userHandler.handleNewMember(member, client)
})

function initCommands() {
    fs.readdir("./src/commands", 'utf8', function(err, data) {
        data.forEach(element => {
            if (element.endsWith('.ts')) {
                const command = require(`./commands/${element}`)
                commands.set(command.name, command)
            }
        });
    })
}

