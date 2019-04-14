class Fireball {

	constructor(canvas, context) {
		this.canvas = canvas
		this.context = context;
		this.sprite = null;
		this.speed = 18;
	}

	tick() {
		if (this.sprite != null) {
			this.sprite.tick(this.x, this.y , this.context);
			if (this.x < this.bossX) {
				this.x += this.speed;
			} else {
				this.sprite = null;
			}
		}
	}

	cast(casterX, casterY, bossX, bossY) {
		this.x = casterX;
		this.y = casterY;
		this.bossX = bossX;
		this.bossY = bossY;
		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/spell1_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

}