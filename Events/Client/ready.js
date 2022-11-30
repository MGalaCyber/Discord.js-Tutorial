//=====================================| Import the Module |=====================================\\
const { Client, version } = require("discord.js");

//==========< OTHERS >==========\\
const { author } = require("../../package.json");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "ready",
    once: true,

    /**
     * @param {Client} client
     */

    async execute(client) {
        console.log(`${color.bold.green(`[READY]`)} ` + `Logging into Discord...`.yellow);
        console.table({
            "Name": client.user.tag,
            "Author": `${author}`,
            "Discord.js": `v${version}`,
            "Node.js": `${process.version}`,
            "Guilds": client.guilds.cache.size,
            "Users": client.users.cache.size,
            "Channels": client.channels.cache.size,
            "Slash Commands": client.slashCommands.size,
            "Events": client.events.size,
            "Arch": process.arch
        });
        console.log(`${color.bold.green(`[READY]`)} ` + `${client.user.tag} is online!`.yellow);
    }
};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */