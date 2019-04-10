class Athos {

	constructor() {
		let columnCount = 11;
		let rowCount = 2;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 5.0;
		this.sprite = new TiledImage("images/athos_sprites_normalized.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.changeSpriteRow(0);
		this.changeSpriteInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	tick(){
	}

	changeSpriteRow(row){
		this.sprite.changeRow(row);
	}

	changeSpriteInterval(min,max){
		this.sprite.changeMinMaxInterval(min, max);
	}
}