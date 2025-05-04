// const { Bullet } = require('./Bullet');
const Loader = require('./Loader');

class Chamber {
	constructor(count) {
		this.loader = new Loader(count);
		this.bullets = this.loader.getBullets();
		console.log(this.bullets.map(b => b.getType()));
	}

	toString() {
		// Example: return a comma-separated list of bullet types
		this.bulletTypes = this.bullets.map(b => b.getType());
		return `Chamber loaded with: ${bulletTypes.join(', ')}`;
	}

	getBullets() {
		return this.bullets;
	}

	getCount() {
		return this.bullets.legnth;
	}

	invert(element) {
		this.bullets = 1 - this.bullets[element];
	}

	invertAll() {
		this.bullets = this.bullets.map(x => 1 - x);
	}

	invertSpecific(element) {
		this.bullets[element] = 1 - this.bullets[element];
	}

	unload(number) {
		for (i = 0; i < number; i++) {
			currentBullet = this.bullets.shift();
		}
		return currentBullet;
	}

	getCurrentBullet() {
		if (this.bullets[0] == undefined) {
			return 'OUT';
		}
		else {
			return this.bullets[0];
		}
	}
}

module.exports = Chamber;