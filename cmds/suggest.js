'use strict';

// suggestion cmd

// Importing & requiring discord.js modules / classes
const { Client, Intents, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

// Config Variables
const suggestionChannelId = process.env['suggestionChannelId']

// Creating new Discord client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription(`Suggest a LOLBot feature`)
        .addStringOption(option =>
            option.setName('suggestion')
                .setDescription('Your suggestion')
                .setRequired(true)),
    async execute(interaction) {
        const suggestion = interaction.options.getString('suggestion');
        const channel = client.channels.cache.get(suggestionChannelId);

        console.log(channel)

        const suggestionEmbed = new MessageEmbed()
            .setTitle('Suggestion')
            .setDescription(`${suggestion}`)
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ format: "png", dynamic: true }) })

        channel.send({ embeds: [suggestionEmbed] });
        await interaction.reply({ content: `Suggestion added in ${channel}!`, ephemeral: true });
    },
};