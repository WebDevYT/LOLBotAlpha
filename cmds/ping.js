'use strict';

// Importing & requiring discord.js modules / classes 
const { Client, Intents } = require('discord.js')

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Pong! \`${sent.createdTimestamp - interaction.createdTimestamp}ms\``);
    },
};