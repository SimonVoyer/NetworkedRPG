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
		this.battleStance();
		//this.attack();
	}

	tick() {
		if (this.id == 1) {
			this.x = this.canvas.width * 4.5/18;
		} else if (this.id == 2) {
			this.x = this.canvas.width * 2/9;
		} else if (this.id == 3) {
			this.x = this.canvas.width * 1/6;
		}
		this.sprite.tick(this.x, this.y, this.context);
	}

	spawn() {
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage1_sprites_stance2.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	battleStance1(){
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage1_sprites_stance2.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
	}

	// battleStance2(){
	// 	let columnCount = 5;
	// 	let rowCount = 1;
	// 	let refreshDelay = 100;
	// 	let loopColumns = true;
	// 	let scale = 3.0;
	// 	this.sprite = new TiledImage("images/zelda_sprites_upwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	// 	this.sprite.changeRow(0);
	// 	this.sprite.changeMinMaxInterval(1, columnCount);
	// }

	// battleStance3(){
	// 	let columnCount = 5;
	// 	let rowCount = 1;
	// 	let refreshDelay = 100;
	// 	let loopColumns = true;
	// 	let scale = 3.0;
	// 	this.sprite = new TiledImage("images/zelda_sprites_upwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	// 	this.sprite.changeRow(0);
	// 	this.sprite.changeMinMaxInterval(1, columnCount);
	// }

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
		setTimeout(()=>this.battleStance1(), 1900);
	}

	// attack2(){
	// 	let columnCount = 5;
	// 	let rowCount = 1;
	// 	let refreshDelay = 100;
	// 	let loopColumns = true;
	// 	let scale = 3.0;
	// 	this.sprite = new TiledImage("images/zelda_sprites_upwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	// 	this.sprite.changeRow(0);
	// 	this.sprite.changeMinMaxInterval(1, columnCount);
	// }

	// attack3(){
	// 	let columnCount = 5;
	// 	let rowCount = 1;
	// 	let refreshDelay = 100;
	// 	let loopColumns = true;
	// 	let scale = 3.0;
	// 	this.sprite = new TiledImage("images/zelda_sprites_upwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	// 	this.sprite.changeRow(0);
	// 	this.sprite.changeMinMaxInterval(1, columnCount);
	// }



}