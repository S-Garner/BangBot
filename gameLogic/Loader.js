const Bullet = require('./Bullet');

class Loader {
	constructor(bCount) {
		this.bullets = [];
		const ratios = [
			[1, 1],
			[2, 1],
			[3, 1],
			[4, 1],
			[2, 2],
			[2, 3],
			[2, 4],
			[3, 3],
			[3, 4],
			[3, 5],
			[4, 4],
		];
		this.setBullets(ratios, bCount);
	}

	getBullets() {
		return this.bullets;
	}

	setBullets(ratios, count) {
		const possibleRatios = [];
		for (let i = 0; i < ratios.length; i++) {
			if (ratios[i][0] + ratios[i][1] === count) {
				possibleRatios.push(ratios[i]);
			}
		}
		if (possibleRatios.length === 0) {
			throw new Error(`No valid ratios found for bullet count: ${count}`);
		}

		const r = possibleRatios[Math.floor(Math.random() * possibleRatios.length)];
		const n = Math.random() < 0.5 ? 0 : 1;
		const lives = r[n];
		const blanks = r[1 - n];

		for (let i = 0; i < lives; i++) {
			this.bullets.push(new Bullet(1));
		}
		for (let i = 0; i < blanks; i++) {
			this.bullets.push(new Bullet(0));
		}

		this.bullets.sort(() => Math.random() - 0.5);
		// Shuffle
	}
}

module.exports = Loader;