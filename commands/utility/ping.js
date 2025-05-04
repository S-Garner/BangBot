const { SlashCommandBuilder } = require('discord.js');
const Chamber = require('../../gameLogic/Chamber.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		this.chamber = new Chamber(5);
		await interaction.reply(`${this.chamber}, ${this.chamber.getCount()}`);
	},
};