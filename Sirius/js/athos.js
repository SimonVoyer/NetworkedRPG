class Athos {

	constructor(canvas, context, elderSpawn) {
		this.canvas = canvas;
		this.context = context;
		this.elderSpawn = elderSpawn;
		this.explosion = new Explosion(canvas,context, this.elderSpawn.x, this.elderSpawn.y);
	}

	tick(){
		this.x = this.canvas.width *6/20;
		this.y = this.canvas.height*4/5;
		if( this.sprite != null){
			this.sprite.tick(this.x, this.y, this.context);
		}
		this.explosion.tick();
	}

	summon() {
		setTimeout(() => this.cast(), 300);
		setTimeout(()=>this.unsummon(), 2000);
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
		this.explosion.cast();
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
		this.explosion.sprite = null;
	}

}