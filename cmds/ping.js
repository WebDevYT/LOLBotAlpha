'use strict';

// ping cmd

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription(`Replies with Bot's API Latency`),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Pong! \`${sent.createdTimestamp - interaction.createdTimestamp}ms\``);
    },
};