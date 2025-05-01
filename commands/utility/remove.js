const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('postandremove')
		.setDescription('Posts a message and removes it after 5 minutes.'),
	async execute(interaction) {
		const message = await interaction.reply({ content: 'This message will self-destruct in 5 minutes.', fetchReply: true });

		setTimeout(async () => {
			try {
				await message.delete();
			}
			catch (error) {
				console.error('Failed to delete message:', error);
			}
		}, 1000);
	},
};
