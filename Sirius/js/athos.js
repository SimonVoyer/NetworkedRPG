class Athos {

	constructor(canvas, context) {
		this.canvas = canvas;
		this.context = context;
		let columnCount = 11;
		let rowCount = 2;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 5.0;
		this.sprite = new TiledImage("images/athos_sprites_normalized.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.changeSpriteRow(1);
		this.changeSpriteInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	tick(){
		this.sprite.tick(this.canvas.width /2, this.canvas.height/5 , this.context)
	}

	changeSpriteRow(row){
		this.sprite.changeRow(row);
	}

	changeSpriteInterval(min,max){
		this.sprite.changeMinMaxInterval(min, max);
	}

	summon() {
		this.changeSpriteRow(0);
		this.sprite.changeCol(0);
		this.changeSpriteInterval(1, 11);
	}

	unsummon() {
		this.changeSpriteRow(1);
	}

}