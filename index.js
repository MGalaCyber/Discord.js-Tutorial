//=====================================| Import the Module |=====================================\\
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const color = require("colors");
require("dotenv").config();

//=====================================| Code |=====================================\\

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

//======================< Handlers >======================\\
const Handlers = [

];

Handlers.forEach(handler => {
    require(`./Structures/Handlers/${handler}`)(client, color);
});

//======================< Login >======================\\
client.login(process.env.TOKEN).then(console.log("Client is ready!"));

module.exports = client;