//=====================================| Import the Module |=====================================\\
const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require("discord.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription("Display button builder [GUIDE]")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands | PermissionFlagsBits.ReadMessageHistory)
        .setDMPermission(false),

    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(client, interaction) {
        try {
            const buttonRespond = await interaction.reply({
                ephemeral: true,
                content: "Button Builder Guide!",
                components: [
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId("btn-primary").setLabel("Primary").setStyle(ButtonStyle.Primary),
                        new ButtonBuilder().setCustomId("btn-secondary").setLabel("Secondary").setStyle(ButtonStyle.Secondary),
                        new ButtonBuilder().setCustomId("btn-success").setLabel("Success").setStyle(ButtonStyle.Success),
                        new ButtonBuilder().setCustomId("btn-danger").setLabel("Danger").setStyle(ButtonStyle.Danger),
                        new ButtonBuilder().setLabel("Button").setStyle(ButtonStyle.Link).setURL("https://www.youtube.com/channel/UCgCCwoPs1l895X3ssa1DP0Q"),
                    )
                ]
            });

            const collector = buttonRespond.createMessageComponentCollector({ componentType: ComponentType.Button, time: 5000 }); // 5 seconds
            collector.on("collect", async (b) => {
                await b.deferUpdate();
                if (b.customId === "btn-primary") {
                    interaction.followUp({
                        ephemeral: true,
                        content: "This is a Primary button."
                    });
                }
                if (b.customId === "btn-secondary") {
                    interaction.followUp({
                        ephemeral: true,
                        content: "This is a Secondary button."
                    });
                }
                if (b.customId === "btn-success") {
                    interaction.followUp({
                        ephemeral: true,
                        content: "This is a Success button."
                    });
                }
                if (b.customId === "btn-danger") {
                    interaction.followUp({
                        ephemeral: true,
                        content: "This is a Danger button."
                    });
                }
            });
            collector.on("end", async () => {
                await interaction.deleteReply();
            });

        } catch (error) {
            console.log(error);
        };
    }
};