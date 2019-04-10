class Zelda {

	constructor() {
		let columnCount = 12;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_battle.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.changeSpriteRow(0);
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