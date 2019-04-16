class Zelda {

	constructor(musicManager, canvas, context, elderSpawn) {
		this.battlePose();
		this.musicManager = musicManager;
		this.canvas = canvas;
		this.context = context;
		this.elderSpawn = elderSpawn;
		this.wiseSpirit = new Athos(musicManager,canvas, context, elderSpawn);
		this.ice = new Ice(canvas, context)
		this.firewall = new Firewall(canvas, context);
		this.hp = -1
		this.mapHP = -1
		this.mp = -1
		this.maxMP = -1
		this.manaCost1 = 0;
		this.manaCost2 = 0;
		this.spellIsReady = true;
	}

	tick(){
		this.x = window.innerWidth /3;
		this.y = window.innerHeight;
		this.sprite.tick(this.x, this.y, this.context);
		this.wiseSpirit.tick();
		this.ice.tick();
		this.firewall.tick();
		if (this.hp > 0) {
			this.context.font = "16px Arial";
			this.context.fillStyle = "white";
			this.context.textAlign = "center";
			let hpValue = this.hp + " /  "+this.maxHP + " HP"
			let mpValue = this.mp + " / "+ this.maxMP + " MP"
			this.context.fillText(hpValue, this.x, this.y - 220);
			this.context.fillText(mpValue, this.x, this.y - 200);
			if (this.spellIsReady){
				this.context.fillText("Spell Ready", this.x, this.y - 180);
			} else {
				this.context.fillText("Magic Recharging", this.x, this.y - 180);
			}
		}
	}

	updateStats(hp, maxHP, mp, maxMP, manaCost1, manaCost2){
		this.hp = hp;
		this.maxHP = maxHP;
		this.mp = mp;
		this.maxMP = maxMP;
		this.manaCost1 = manaCost1;
		this.manaCost2 = manaCost2;
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
		setTimeout(() => this.battlePose(), 800);
	}

	basicSpell(isIce = true) {
		this.musicManager.playSpell();
		if (isIce) {
			this.ice.cast(this.x, this.y -200, this.elderSpawn.x, this.elderSpawn.y);
			this.musicManager.playIceSpell();
		}
		let columnCount = 8;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_spell.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		setTimeout(()=> this.battlePose(), 700);
	}

	summonSpirit() {
		this.musicManager.playSpiritCast();
		this.wiseSpirit.summon();

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
		this.musicManager.playFireSpell();
		this.firewall.cast(1.0, this.x, this.y)
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

	down() {
		this.musicManager.playDown();
		let columnCount = 10;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_falling.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		setTimeout(()=>this.passedOut(),500)
	}

	passedOut() {
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 3000;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/zelda_sprites_down.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}



}