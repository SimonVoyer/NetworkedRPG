class Zelda {

	constructor(musicManager, canvas, context) {
		this.battlePose();
		this.musicManager = musicManager;
		this.canvas = canvas;
		this.context = context;
		this.wiseSpirit = new Athos(canvas, context);
		this.isSummonActive = false;
	}

	tick(){
		this.sprite.tick(this.canvas.width /2, 3*this.canvas.height/4 , this.context);
		if (this.isSummonActive) {
			this.wiseSpirit.tick();
		}
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

	summonSpirit() {
		this.wiseSpirit.summon();
		this.isSummonActive = true;
		setTimeout(()=> this.unsummonSpirit(this),1000)

	}

	unsummonSpirit(zelda){
		zelda.wiseSpirit.unsummon();
		zelda.isSummonActive = false;
	}

	startJump() {
		this.musicManager.playHoveringSpell();
		let columnCount = 5;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_upwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}


	hover(){
		let columnCount = 5;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_hover.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

	land(){
		let columnCount = 5;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_downwards.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}


}