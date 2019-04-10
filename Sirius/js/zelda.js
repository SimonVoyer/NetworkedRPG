class Zelda {

	constructor() {
	let columnCount = 5;
	let rowCount = 4;
	let refreshDelay = 100;
	let loopColumns = true;
	let scale = 1.0;
	this.sprite = new TiledImage("images/zelda_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	this.changeSpriteRow(3);
	this.changeSpriteInterval(1, columnCount);
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