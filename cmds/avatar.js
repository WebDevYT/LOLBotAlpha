'use strict';

// avatar cmd

// Importing & requiring discord.js modules / classes
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription(`Replies with your avatar`)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user of the avatar that you want to see')
                .setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');

        if (user) {
            const av = new MessageEmbed()
                .setTitle('Avatar')
                .setDescription('Click URLs below for different Avatar image sizes.')
                .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ format: "png", dynamic: true }) })
                .addFields(
                    { name: '16', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 16 }), inline: true },
            		{ name: '32', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 32 }), inline: true },
                    { name: '64', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 64 }), inline: true },
            		{ name: '\u200B', value: '\u200B' },
            		{ name: '128', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 128 }), inline: true },
            		{ name: '256', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 256 }), inline: true },
                    { name: '512', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 512 }), inline: true },
                    { name: '\u200B', value: '\u200B' },
            		{ name: '1024', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }), inline: true },
            		{ name: '2048', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }), inline: true },
                    { name: '4096', value: user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 }), inline: true },
            	)
                .setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 }))
                .setTimestamp()
                .setFooter({ text: '© LOLBot 2022', iconURL: 'https://cdn.discordapp.com/attachments/841790694179078195/865696047585558548/unknown.png' });

            await interaction.reply({ embeds: [av] });
        } else {
            const avEmbed = new MessageEmbed()
                .setTitle('Avatar')
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ format: "png", dynamic: true }) })
                .addFields(
                    { name: '16', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 16 }), inline: true },
            		{ name: '32', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 32 }), inline: true },
                    { name: '64', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 64 }), inline: true },
            		{ name: '\u200B', value: '\u200B' },
            		{ name: '128', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 128 }), inline: true },
            		{ name: '256', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 256 }), inline: true },
                    { name: '512', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 512 }), inline: true },
                    { name: '\u200B', value: '\u200B' },
            		{ name: '1024', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }), inline: true },
            		{ name: '2048', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }), inline: true },
                    { name: '4096', value: interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 }), inline: true },
            	)
                .setImage(interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 }))
                .setTimestamp()
                .setFooter({ text: '© LOLBot 2022', iconURL: 'https://cdn.discordapp.com/attachments/841790694179078195/865696047585558548/unknown.png' });

            await interaction.reply({ embeds: [avEmbed] });
        }
    },
};