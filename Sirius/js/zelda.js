class Zelda {

	constructor(musicManager) {
		this.battlePose();
		this.musicManager = musicManager;
	}

	tick(){

	}

	battlePose() {
		let columnCount = 12;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_battle.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

	tookDamage() {
		this.musicManager.playDamage();
		let columnCount = 9;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_damage.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

	basicSpell() {
		this.musicManager.playSpell();
		let columnCount = 8;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_spell.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

	attackSpecial1() {

	}

	attackSpecial2() {

	}

}