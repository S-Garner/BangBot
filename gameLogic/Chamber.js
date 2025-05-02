// const { Bullet } = require('./Bullet');
const Loader = require('./Loader');

class Chamber {
	constructor(count) {
		const loader = new Loader(count);
		this.bullets = loader.getBullets();
		console.log(this.bullets.map(b => b.getType()));
	}

	toString() {
		// Example: return a comma-separated list of bullet types
		const bulletTypes = this.bullets.map(b => b.getType());
		return `Chamber loaded with: ${bulletTypes.join(', ')}`;
	}
}

module.exports = Chamber;