//=====================================| Import the Module |=====================================\\
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const color = require("colors");
require("dotenv").config();

//=====================================| Code |=====================================\\

//======================< Function >======================\\
const { loadCommands } = require("./Structures/Handlers/Loaders/loadCommands.js");
const { loadEvents } = require("./Structures/Handlers/Loaders/loadEvents.js");

//======================< Client >======================\\
const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User
    ],
    fetchAllMembers: true
});

//======================< Collection >======================\\
client.slashCommands = new Collection();
client.events = new Collection();

//======================< Login >======================\\
client.login(process.env.TOKEN).then(() => {
    loadEvents(client, color);
    loadCommands(client, color);
}).catch(err => {
    console.log(`${color.bold.red(`[INDEX ERROR]`)} ` + `${err}`.bgRed);
});

module.exports = client;