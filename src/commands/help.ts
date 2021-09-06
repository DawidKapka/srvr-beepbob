module.exports = {
    name: "help",
    description: "Get Help",
    admin: true,
    execute(client, message, args, commands) {
        const Discord = require('discord.js')
        let desc = ''
        commands.forEach(element => {
            desc += '!' + element.name + ' : ' + element.description + '\n'

        });
        const embed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle('Help')
            .setDescription("``" + `${desc}` + "``")
            .setFooter("");
        message.channel.send(embed);
    }
}