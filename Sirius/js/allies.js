class Allies {

	constructor(id, musicManager, canvas, context) {
		this.id = id;
		this.musicManager = musicManager;
		this.canvas = canvas;
		this.context = context;
		this.y = window.innerHeight

		if (this.id == 1) {
			this.battleStance = this.battleStance1;
			this.attack = this.attack1;
		} else if (this.id == 2) {
			this.battleStance = this.battleStance2;
			this.attack = this.attack2;
			this.x = this.canvas.width /10;
		} else if (this.id == 3) {
			this.battleStance = this.battleStance3;
			this.attack = this.attack3;
			this.x = this.canvas.width /12;
		}
		this.spawn();
		this.attack();
	}

	tick() {
		if (this.id == 1) {
			this.x = this.canvas.width * 4.5/18;
		} else if (this.id == 2) {
			this.x = this.canvas.width * 1/6;
		} else if (this.id == 3) {
			this.x = this.canvas.width * 0.8/9;
		}
		this.sprite.tick(this.x, this.y, this.context);
	}

	spawn() {
		this.musicManager.playThunder();
		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/thunder_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		setTimeout(()=>this.battleStance(), 500);
	}

	battleStance1(){
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage1_sprites_stance.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	battleStance2(){
		let columnCount = 20;
		let rowCount = 1;
		let refreshDelay = 150;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage2_sprites_stance.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	battleStance3(){
		let columnCount = 30;
		let rowCount = 1;
		let refreshDelay = 200;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage3_sprites_stance30.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	attack1(){
		let columnCount = 20;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage1_sprites_attack2.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
		setTimeout(()=>this.battleStance(), 1900);
	}

	attack2(){
		let columnCount = 20;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage2_sprites_attack20.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
		setTimeout(()=>this.battleStance(), 1500);
	}

	attack3(){
		let columnCount = 50;
		let rowCount = 1;
		let refreshDelay = 60;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage3_sprites_attack50.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
		setTimeout(()=>this.battleStance(), 4000);
	}



}