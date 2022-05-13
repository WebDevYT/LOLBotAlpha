'use strict';

// LOL Community Discord Bot

// Importing & requiring discord.js modules / classes 
const { Client, Intents } = require('discord.js')

// Config Variables
const { token } = require('./config.json');

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Ready Event
// Bot will start received info from Discord only after this event
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}!`);
});

// Bot Token
// To login to Discord
client.login(token);