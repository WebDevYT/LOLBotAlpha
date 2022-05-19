'use strict';

// role cmd

// Importing & requiring discord.js modules / classes
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription(`Adds/removes stated role to stated user`)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user you want to use')
                .setRequired(true))
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('The role you want to use')
                .setRequired(true)),
    async execute(interaction) {
        const author = interaction.member;
        const user = interaction.options.getUser('user');
        const member = interaction.options.getMember('user');
        const aRole = interaction.options.getRole('role');

        if (author.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
            if (member.roles.cache.some(role => role.name === aRole.name)) {
                member.roles.remove(aRole).catch(console.error);
                await interaction.reply({ content: `Role ${aRole} removed from User ${user}`, ephemeral: true });
            } else {
                member.roles.add(aRole);
                await interaction.reply({ content: `Role ${aRole} added to User ${user}`, ephemeral: true });
            }
        } else {
            await interaction.reply({ content: `You do not have permission to manage your/other user's roles.`, ephemeral: true });
        }
    },
};