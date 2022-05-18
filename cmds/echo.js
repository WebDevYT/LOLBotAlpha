'use strict';

// echo cmd

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echoes back/repeats your input to you or to a chosen channel')
        .addStringOption(option =>
            option.setName('msg')
                .setDescription('The message you want to echo')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Select a channel to echo your message in')
                .setRequired(false)),
    async execute(interaction) {
        const msg = interaction.options.getString('msg');
        const channel = interaction.options.getChannel('channel');

        if (channel === null){
            interaction.channel.send(msg);
            await interaction.reply({ content: 'Echo sent!', ephemeral: true });
        } else {
            channel.send(msg);
            await interaction.reply({ content: `Echo message \"${msg}\" sent in ${channel}!`, ephemeral: true });
        }
    },
};