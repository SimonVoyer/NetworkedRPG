class Firewall {

	constructor(canvas, context) {
		this.canvas = canvas
		this.context = context;
		this.sprite = null;
	}

	tick() {
		if (this.sprite !== null) {
			this.sprite.tick(this.x, this.y , this.context);
		}

	}

	cast(scale,casterX, casterY) {
		this.x = casterX;
		this.y = casterY;
		let columnCount = 15;
		let rowCount = 1;
		let refreshDelay = 30;
		let loopColumns = true;
		this.sprite = new TiledImage("images/spell2_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		if (scale < 100.0){
			scale += 10.0;
			setTimeout(() =>this.cast(scale,this.x, this.y + 300 ), 200);
		} else {
			this.sprite = null;
		}
	}

}