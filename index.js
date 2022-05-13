'use strict';

// LOL Community Discord Bot

// To read command files
const fs = require('node:fs');

// Importing & requiring discord.js modules / classes 
const { Client, Collection, Intents } = require('discord.js')

// Config Variables
const token = process.env['token']

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

// To dynamically retrieving command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// Ready Event
// Bot will start receiving info from Discord only after this event
client.once('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
    
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

// Bot Client Token
// Used to login into Discord
client.login(token);