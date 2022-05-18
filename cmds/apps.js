'use strict';

// cmd for apps

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

// Creating Ban Appeal form
const banappeal = new Modal()
    .setCustomId('myModal')
    .setTitle('My Modal');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('apps')
        .setDescription(`Opens a Content Creator application or a Ban Appeal application for you to fill out & submit`)
        .addSubcommand(subcommand =>
            subcommand
                .setName('ccapp')
                .setDescription('Opens 1v1.LOL Content Creator application'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('banappeal')
                .setDescription('Opens 1v1.LOL Content Creator form')),
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;

        const user = interaction.user.tag;
        const userID = interaction.user.id;

        if (interaction.options.getSubcommand() === 'cc') {
            // Creating CC App
            const ccapp = new Modal()
                .setCustomId('ccapp')
                .setTitle('1v1.LOL Content Creator Application');
            // Added components to form
            // Create new text input component
            const bdayInput = new TextInputComponent()
                .setCustomId('bday')
                // Label -> prompts the user for this input
                .setLabel("What's your date of birth? (Example: mm/dd/yyyy)")
                // SHORT -> single line of text
                // PARAGRAPH -> multiple lines of text
                .setStyle('SHORT');
            const channelInput = new TextInputComponent()
                .setCustomId('channelURL')
                .setLabel("Please post a link to your channel (YouTube or Twitch) that you wish to use for this application. Channel must met Content Creator requirements or the application may be denied.")
                .setStyle('SHORT');
            // An action row only holds one text input,
            // so you need one action row per text input.
            const bday = new MessageActionRow().addComponents(bdayInput);
            const channelURL = new MessageActionRow().addComponents(channelInput);
            // Adds components to modal
            ccapp.addComponents(bday, channelURL);
            // Show CC App to the user
            await interaction.showModal(ccapp);
        } else if (interaction.options.getSubcommand() === 'banappeal') {
            // Show Ban Appeal form to the user
            await interaction.showModal(banappeal);
        }
    },
};