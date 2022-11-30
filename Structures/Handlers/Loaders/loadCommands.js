//=====================================| Code |=====================================\\
async function loadCommands(client, color) {
    const { readdirSync } = require("fs");
    await client.slashCommands.clear();
    let publicCommandsArray = [];

    console.log(`${color.bold.green(`[GLOBAL COMMANDS]`)} ` + `Started refreshing application commands...`.yellow);

    const commandFolders = readdirSync(`${process.cwd()}/Commands`);
    let publicCommands = 0;
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`${process.cwd()}/Commands/${folder}`).filter(file => file.endsWith(".js"));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/Commands/${folder}/${file}`);
            client.slashCommands.set(command.data.name, command);
            publicCommandsArray.push(command.data.toJSON());
            publicCommands++;
        };
    };
    client.application.commands.set(publicCommandsArray).then(
        console.log(`${color.bold.green(`[GLOBAL COMMANDS]`)} ` + `[${publicCommandsArray.length}] `.cyan + `Successfully loaded!`.yellow)
    );
};

async function unloadCommands(client, color) {
    client.application.commands.set([]);
    console.log(`${color.bold.green(`[GLOBAL COMMANDS]`)} ` + `Successfully unloaded application commands!`.yellow);
};

module.exports = { loadCommands, unloadCommands };