// To read command files
const fs = require('node:fs');

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Config Variables
const token = process.env['token']
const clientId = process.env['clientId']
const guildId = process.env['guildId']

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);