class ElderOne {

	constructor(musicManager, canvas, context) {
		this.battlePose();
		this.musicManager = musicManager;
		this.canvas = canvas;
		this.context = context;
	}

	tick() {
		this.sprite.tick(this.canvas.width * 3/4, this.canvas.height * 3/4 , this.context);
	}

	battlePose() {
		let columnCount = 8;
		let rowCount = 1;
		let refreshDelay = 180;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/elder_sprites_battle.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, columnCount);
	}


}
