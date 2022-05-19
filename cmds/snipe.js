'use strict';

// ping cmd

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('steal')
        .setDescription(`Replies with the most recent deleted message`),
    async execute(interaction) {
        
    },
};