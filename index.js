'use strict';

// LOL Community Discord Bot

// To read cmd files
const fs = require('node:fs');
const path = require('node:path');

// Importing & requiring discord.js modules / classes 
const { Client, Collection, Intents } = require('discord.js')

// Config Variables
const token = process.env['token']

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// To dynamically read Event files
const eventsPath = path.join(__dirname, 'events');

// Returns array of all files in Events Folder
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// To dynamically retrieving Event files
for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// To read cmd files
client.commands = new Collection();

// To dynamically retrieving cmd files
const cmdsPath = path.join(__dirname, 'cmds');
const cmdFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
    const filePath = path.join(cmdsPath, file);
    const cmd = require(filePath);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(cmd.data.name, cmd);
}

// Interaction listener
// To reply to cmds
client.on('interactionCreate', async interaction => {
    //console.log(interaction);
    console.log(`${interaction.user.tag} triggered an interaction in #${interaction.channel.name} in Server "${interaction.guild.name}".`);

    // To dynamically execute cmds
    // Get cmd from Collection
    const cmd = client.commands.get(interaction.commandName);

    if (!cmd) return;

    try {
        // Call cmd method
        await cmd.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Bot Client Token
// Used to login into Discord
client.login(token);