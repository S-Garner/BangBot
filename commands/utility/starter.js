class starter {
	constructor(interaction) {
		this.interaction = interaction;
		this.result = null;
	}

	getCalculation() {
		const expression = this.interaction.options.getString('expression');
		const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, '');
		try {
			this.result = eval(sanitizedExpression);
		}
		catch (error) {
			this.result = 'Invalid expression';
			console.error('Error evaluating expression:', error);
		}
	}

	async execute() {
		await this.interaction.reply(`The result is: ${this.result}`);
		await this.interaction.replay(`Your id: ${this.interaction.user.id}`);
	}
}

module.exports = starter;
