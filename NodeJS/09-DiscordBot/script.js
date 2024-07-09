require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: `Use API for generating Short URL for ${url}`,
    });
  }

  message.reply({
    content: "Hello, you're talking to your own bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Poing!");
});

client.login(process.env.DISCORD_TOKEN);
