class Zelda {

	constructor() {
		let columnCount = 4;
		let rowCount = 4;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 1.0;
		this.sprite = new TiledImage("images/zelda_sprites_normalized.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.changeSpriteRow(0);
		this.changeSpriteInterval(1, rowCount);
		//this.sprite.setFlipped(true);
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