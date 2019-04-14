class Explosion {

	constructor(canvas, context, x, y) {
		this.canvas = canvas
		this.context = context;
		this.x = x
		this.y = y;
		this.sprite = null;
	}

	tick() {
		if (this.sprite !== null){
			this.sprite.tick(this.x, this.y , this.context);
		}
	}

	cast() {
		let columnCount = 19;
		let rowCount = 1;
		let refreshDelay = 150;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/spell4_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

}