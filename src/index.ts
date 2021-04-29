import { Client } from 'discord.js';
import { MessageHandler} from './handler/MessageHandler';
import { UserHandler } from './handler/UserHandler';


const client = new Client();
const messageHandler = new MessageHandler();
const userHandler = new UserHandler();


client.login('ODM2OTk4NDk2NDY4NzI5ODY2.YImJmA.-tlIled8r2frTMjyiJpIgTJWYPw');

client.on('message', message => {

    //only pls meme in meme channel

});
client.on('guildMemberAdd', member => {
    userHandler.handleNewMember(member, client)
})


