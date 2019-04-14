class Ice {

	constructor(canvas, context, casterX, casterY, bossX, bossY) {
		this.canvas = canvas
		this.context = context;
		this.x = casterX;
		this.y = casterY;
		this.bossX = bossX;
		this.bossY;
		this.sprite = null;
	}

	tick() {
		if (this.x < this.bossX) {
			this.x+=1;
		} else {
			this.sprite = null;
		}
		if (this.sprite != null){
			this.sprite.tick(this.x, this.y , this.context);
		}
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