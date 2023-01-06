//=====================================| Import the Module |=====================================\\
const { ChatInputCommandInteraction, Client } = require("discord.js");

//==========< OTHERS >==========\\
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "interactionCreate",

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            if (interaction.user.bot) return;
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command is outdated!"
                });
            };
            try {
                command.execute(client, interaction);
            } catch (error) {
                console.log(`${color.bold.red(`[INTERACTION > CREATE : ERROR]`)} ` + `${error}`.bgRed);
            }
        };
        if (interaction.isButton()) {
            if (interaction.customId === "btn-primary") {
                interaction.reply({
                    ephemeral: true,
                    content: "This is a Primary button"
                });
            }
            if (interaction.customId === "btn-secondary") {
                interaction.reply({
                    ephemeral: true,
                    content: "This is a Secondary button"
                });
            }
            if (interaction.customId === "btn-success") {
                interaction.reply({
                    ephemeral: true,
                    content: "This is a Success button"
                });
            }
            if (interaction.customId === "btn-danger") {
                interaction.reply({
                    ephemeral: true,
                    content: "This is a Danger button"
                });
            }
        }
    }
};