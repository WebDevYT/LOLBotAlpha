'use strict';

// info cmd

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription(`Replies with info about the bot or a certain user, channel, or server that you're in!`)
        .addSubcommand(subcommand =>
            subcommand
                .setName('bot')
                .setDescription('Info about the bot'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('user').setDescription('The user you want to get info about').setRequired(false)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('channel')
                .setDescription('Info about a channel')
                .addChannelOption(option => option.setName('channel').setDescription('The channel you want to get info about').setRequired(false)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server you are in')),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'bot') {
            
        } else if (interaction.options.getSubcommand() === 'user') {
            
        }
    },
};