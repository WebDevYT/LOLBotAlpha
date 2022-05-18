'use strict';

// cmd to restart bot

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

// Config Variables
const id = process.env['id']

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restarts bot'),
    async execute(interaction) {
        if (interaction.user.id === id) {
            await interaction.reply(`\**__Bot Server\**`)
            process.exit();
        } else {
            await interaction.reply({ content: 'You do not have permission to restart the bot.', ephemeral: true });
        }
    },
};