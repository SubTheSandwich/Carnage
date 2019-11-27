const { RichEmbed } = require("discord.js");

module.exports = {
    name: "announce",
    aliases: ["a"],
    category: "moderation",
    description: "Announce",
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
            .setFooter(message.member.user.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setTitle('Announcement');

                

        message.channel.send(embed);
    }
};
