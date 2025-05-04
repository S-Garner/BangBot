class Player {
	constructor(name, id, health) {
		this.name = name;
		this.health = health;
		this.id = id;
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getHealth() {
		return this.health;
	}

	setHealth(health) {
		this.health += health;
		return health;
	}

	isAlive() {
		return this.health >= 0;
	}

}

module.exports = Player;