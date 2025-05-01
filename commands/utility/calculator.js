const { SlashCommandBuilder } = require('discord.js');
// eslint-disable-next-line no-inline-comments
const Starter = require('./starter'); // Use './starter' if same folder

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculator')
		.setDescription('Performs basic arithmetic operations')
		.addStringOption(option =>
			option.setName('expression')
				.setDescription('The arithmetic expression to evaluate (e.g., 2 + 2)')
				.setRequired(true)),
	async execute(interaction) {
		const instance = new Starter(interaction);
		instance.getCalculation();
		await instance.execute();
	},
};
