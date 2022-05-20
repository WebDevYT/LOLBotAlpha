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
        const role = interaction.options.getRole('role');

        if (author.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
            if (author.roles.highest.comparePositionTo(role) >= 1) {
                if (member.roles.cache.has(role.id)) {
                    member.roles.remove(role).catch(console.error);
                    await interaction.reply({ content: `Removed ${role} role from ${user}`, ephemeral: true });
                } else {
                    member.roles.add(role);
                    await interaction.reply({ content: `Added ${role} role to ${user}`, ephemeral: true });
                }
            } else if (author.id === user.id) {
                await interaction.reply({ content: `You are unable to use higher roles than your own highest role in the server.`, ephemeral: true });
            } else {
                await interaction.reply({ content: `You are unable to use roles, that are in the same or in a higher position than your own highest role in the server, to other users.`, ephemeral: true });
            }
        } else {
            await interaction.reply({ content: `You do not have permission to manage your/other user's roles.`, ephemeral: true });
        }
    },
};