'use strict';

// cmd deployment script

// To read cmd files
const fs = require('node:fs');
const path = require('node:path');

// Packages for developing slash cmds
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Config Variables
const token = process.env['token']
const clientId = process.env['clientId']

// Array of cmds
const cmds = [];

// To dynamically retrieving cmd files
const cmdsPath = path.join(__dirname, 'cmds');
const cmdFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
    const filePath = path.join(cmdsPath, file);
    const cmd = require(filePath);
    cmds.push(cmd.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log(`Started loading bot's / cmds.`);

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: cmds },
        );

        console.log(`Successfully loaded bot's / cmds.`);
    } catch (error) {
        console.error(error);
    }
})();