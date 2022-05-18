'use strict';

// cmd to restart bot

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

// Config Variables
const dev = process.env['dev']

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restarts bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('update')
                .setDescription('Bot Server restart for update'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('sleep')
                .setDescription('Bot Server offline due to Dev Team sleeping')),
    async execute(interaction) {
        if (interaction.user.id === dev) {
            if (interaction.options.getSubcommand() === 'update') {
                await interaction.reply(`\__**Bot Server Update\**__\nA new update of the bot has been uploaded to our servers. The bot will now restart to apply the update.\n\nPlease wait patiently for the servers to come back online. This may take a couple of minutes.`);
                process.exit();
            } else if (interaction.options.getSubcommand() === 'sleep') {
                await interaction.reply(`\__**Bot Server Offline\**__\nThe bot servers will now go offline for the night.\n\nAs the bot servers cannot run 24/7, the Dev Team usually shuts down the server every night. Sorry for this inconvenience.`);
                process.exit();
            }
        } else {
            await interaction.reply({ content: 'You do not have permission to restart the bot.', ephemeral: true });
        }
    },
};