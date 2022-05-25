'use strict';

// prune cmd

// Importing & requiring discord.js modules / classes
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prune')
        .setDescription(`Deletes the number of messages inputed`)
        .addStringOption(option =>
    		option.setName('number')
    			.setDescription('The number of messages you want to delete')
    			.setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('number');

		if (isNaN(amount)) {
			return interaction.reply('that doesn\'t seem to be a valid number.');
		} else if (amount < 2 || amount > 100) {
        	return interaction.reply('you need to input a number between 2 and 100.');
        }

        interaction.channel.bulkDelete(amount, true).catch(err => {
        	console.error(err);
        	interaction.channel.send('there was an error trying to prune messages in this channel!');
        });
    },
};