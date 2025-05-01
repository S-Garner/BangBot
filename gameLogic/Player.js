class Player {
	constructor(name, health) {
		this.name = name;
		this.health = health;
	}

	getName() {
		return this.name;
	}

	getHealth() {
		return this.health;
	}

	setHealth(health) {
		this.health += health;
	}

	isAlive() {
		return this.health >= 0;
	}

}

module.exports = Player;