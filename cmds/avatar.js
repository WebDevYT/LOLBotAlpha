'use strict';

// avatar cmd

// Importing & requiring discord.js modules / classes
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription(`Replies with a user's or your avatar`)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user that you want to view their avatar')
                .setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getMember('user');
        const userTag = user.tag;

        if (user){
            const avEmbed = new MessageEmbed()
                .setTitle('Avatar')
                .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL}` })
                .setImage(`${user.displayAvatarURL}`)
                .setTimestamp()
	            .setFooter({ text: 'LOLBot', iconURL: 'https://cdn.discordapp.com/attachments/841790694179078195/865696047585558548/unknown.png' });

            await interaction.reply({ embeds: [avEmbed] });
        }
    },
};