'use strict';

// echo cmd

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription(`Replies/echoes your input`)
        .addStringOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo in')
                .setRequired(false))
        .addStringOption(option2 =>
            option2.setName('input')
                .setDescription('The input to echo')
                .setRequired(true)),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Pong! \`${sent.createdTimestamp - interaction.createdTimestamp}ms\``);
    },
};