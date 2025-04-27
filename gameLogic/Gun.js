class Gun {
	constructor(numberOfChambers) {
		this.chambers = new Array(numberOfChambers).fill(null);
	}

	loadBullets(bullets) {
		if (bullets.length > this.chambers.length) {
			throw new Error('Too many bullets for the gun!');
		}
		for (let i = 0; i < bullets.length; i++) {
			this.chambers[i] = bullets[i];
		}
		this.shuffleChambers();
	}

	shuffleChambers() {
		for (let i = this.chambers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.chambers[i], this.chambers[j]] = [this.chambers[j], this.chambers[i]];
		}
	}

	printChambers() {
		return this.chambers.map(b => b ? b.type : null).join(', ');
	}

	getCurrentBullet() {
		return this.chambers[0];
	}

	getCurrentBulletType() {
		return this.chambers[0] ? this.chambers[0].type : null;
	}

	unloadBullet() {
		const bullet = this.chambers.shift();
		return bullet;
	}

	shoot() {
		if (this.chambers[0]) {
			const bullet = this.unloadBullet();
			return bullet;
		}
		else {
			throw new Error('No bullet in the chamber!');
		}
	}
}

module.exports = Gun;