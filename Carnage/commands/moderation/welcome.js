const { RichEmbed } = require("discord.js");

module.exports = {
    name: "welcome",
    aliases: ["w"],
    category: "moderation",
    description: "Welcome",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        if (args.length < 0)
            message.delete();

        const roleColor = message.guild.me.highestRole.hexColor;

        const embed = new RichEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(roleColor === "#000000" ? "#ffffff" : roleColor)
            .setTitle('Welcome to the Carnage Discord');

                

        message.channel.send(embed);
    }
};
