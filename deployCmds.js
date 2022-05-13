'use strict';

// cmd deployment script

// To read cmd files
const fs = require('node:fs');

// Packages for developing slash cmds
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Config Variables
const token = process.env['token']
const clientId = process.env['clientId']
const guildId = process.env['guildId']

// Array of cmds
const cmds = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
]
    .map(cmd => cmd.toJSON());

// To dynamically retrieving cmd files
const cmdFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
	const cmd = require(`./cmds/${file}`);
	cmds.push(cmd.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: cmds })
    .then(() => console.log('Successfully registered app cmds.'))
    .catch(console.error);