const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dm')
		.setDescription('Sends a DM to the user who used this command.'),
	async execute(interaction) {
		try {
			await interaction.user.send('Hello! This is your DM.');
			await interaction.reply({ content: 'I sent you a DM!', ephemeral: true });
		}
		catch (error) {
			console.error('Failed to send DM:', error);
			await interaction.reply({ content: 'I could not send you a DM. You might have DMs disabled.', ephemeral: true });
		}
	},
};