import { RankCommands } from "../ranks/RankCommands";
import { Client, GuildMember, TextChannel } from 'discord.js';

var rankCommands = new RankCommands();

export class UserHandler {
        handleNewMember(member: GuildMember, client: Client) { 
            rankCommands.setInitRank(member)
            const channel = client.channels.cache.get('837393291775311903')
        if (channel.isText)  (<TextChannel> channel).send(`Welcome <@${member.user.id}>! Have a nice stay :)`)        
        }
}