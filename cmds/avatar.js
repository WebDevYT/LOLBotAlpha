'use strict';

// ping cmd

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

        if (user){

            const avEmbed = new MessageEmbed()
                .setTitle('Avatar')
                .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ format: "png", dynamic: true }) })
                .setTimestamp()
	            .setFooter({ text: '© LOLBot 2022', iconURL: 'https://cdn.discordapp.com/attachments/841790694179078195/865696047585558548/unknown.png' });
            
            await interaction.reply({ embeds: [avEmbed] });
        } else {
            
            await interaction.reply({ embeds: [avEmbed] });
        }
    },
};