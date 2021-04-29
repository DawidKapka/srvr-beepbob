import { GuildMember } from 'discord.js';

export class RankCommands {
    setInitRank(member: GuildMember) {
        const initRank = member.guild.roles.cache.get('778358416925786122');
        member.roles.add(initRank);
    }
}