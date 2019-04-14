class Ice {

	constructor(canvas, context) {
		this.canvas = canvas
		this.context = context;
		this.x = this.canvas.width /3
		this.y = window.innerHeight * 2/4;
		this.cast();
	}

	tick() {
		this.sprite.tick(this.x, this.y , this.context);
	}

	cast() {
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 2.0;
		this.sprite = new TiledImage("images/spell3_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

}