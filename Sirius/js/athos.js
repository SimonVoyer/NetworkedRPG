class Athos {

	constructor(canvas, context) {
		this.canvas = canvas;
		this.context = context;
	}

	tick(){
		this.x = this.canvas.width *6/20;
		this.y = this.canvas.height*4/5;
		if( this.sprite != null){
			this.sprite.tick(this.x, this.y, this.context);
		}
	}

	summon() {
		setTimeout(() => this.cast(), 300);
		setTimeout(()=>this.unsummon(), 2500);
		this.prepareToCast();
	}

	prepareToCast() {
		let columnCount = 5;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 5.0;
		this.sprite = new TiledImage("images/athos_sprites_preparation.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	cast() {
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 5.0;
		this.sprite = new TiledImage("images/athos_sprites_casting.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}


	unsummon() {
		this.sprite = null;
	}

}