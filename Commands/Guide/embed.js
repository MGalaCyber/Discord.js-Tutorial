//=====================================| Import the Module |=====================================\\
const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Display embed builder [GUIDE]")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands | PermissionFlagsBits.ReadMessageHistory)
        .setDMPermission(false),

    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(client, interaction) {
        try {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setAuthor({ name: "GalaXd1274", iconURL: client.user.displayAvatarURL(), url: "https://www.youtube.com/channel/UCgCCwoPs1l895X3ssa1DP0Q" }) // max embed title are limited to 256 characters
                        .setColor("Green")
                        .setURL("https://www.youtube.com/channel/UCgCCwoPs1l895X3ssa1DP0Q")
                        .setTitle("This is a embed title.") // max embed title are limited to 256 characters
                        .setDescription("This is a embed description.") // max embed title are limited to 4096 characters
                        .setImage("https://media.discordapp.net/attachments/886072681475244112/886073431819423754/background_Goodbye.png") // or you can use client bot avatar using client.user.displayAvatarURL()
                        .setThumbnail("https://media.discordapp.net/attachments/886072681475244112/886073453013258260/background_Welcome.png") // same like image embed
                        .addFields( // max embed field name are limited to 256 characters and value to 1024 characters.
                            { name: "Field 1", value: "Field value 1", inline: true },
                            { name: "Field 2", value: "Field value 2", inline: true },
                            { name: "Field 3", value: "Field value 3", inline: true },
                            { name: "Field 4", value: "Field value 4", inline: false },
                            { name: "Field 5", value: "Field value 5", inline: false },
                        ) // you can add field up to 25 fields
                        .setFooter({ text: "Subscribe now!", iconURL: client.user.displayAvatarURL() }) // max embed footer text are limited to 2048 characters
                        .setTimestamp()
                ]
            })

        } catch (error) {
            console.log(error);
        };
    }
};