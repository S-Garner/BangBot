const { SlashCommandBuilder } = require('discord.js');
const { starter } = require('../../starter.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculator')
		.setDescription('Performs basic arithmetic operations')
		.addStringOption(option =>
			option.setName('expression')
				.setDescription('The arithmetic expression to evaluate (e.g., 2 + 2)')
				.setRequired(true)),
	async execute(interaction) {
		starter(interaction);
	},
};