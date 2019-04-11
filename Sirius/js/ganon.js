class Ganon {

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
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 180;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/ganondorf_sprites_battle.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, columnCount);
	}

	attack(){
		this.musicManager.playGanonAttack();
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 180;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/ganondorf_sprites_attack.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, columnCount);
		setTimeout(() => this.battlePose(), 1675);
	}

}
