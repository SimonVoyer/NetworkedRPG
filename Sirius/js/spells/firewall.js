class Firewall {

	constructor(canvas, context) {
		this.canvas = canvas
		this.context = context;
		this.x = this.canvas.width /3
		this.y = window.innerHeight * 3/4;
		this.cast();
	}

	tick() {
		this.sprite.tick(this.x, this.y , this.context);
	}

	cast() {
		let columnCount = 15;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/spell2_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

}