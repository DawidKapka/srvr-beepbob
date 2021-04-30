import { Client } from 'discord.js';
import { MessageHandler} from './handler/MessageHandler';
import { UserHandler } from './handler/UserHandler';


const client = new Client();
const messageHandler = new MessageHandler();
const userHandler = new UserHandler();
const config = require('../config.json')

client.login(config.token);

client.on('message', message => {
    messageHandler.checkMessageForChannels(message)
    messageHandler.handle(message)
});
client.on('guildMemberAdd', member => {
    userHandler.handleNewMember(member, client)
})


