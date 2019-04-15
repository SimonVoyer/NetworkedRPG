class Allies {

	constructor(id, musicManager, canvas, context, elderSpawn) {
		this.id = id;
		this.musicManager = musicManager;
		this.canvas = canvas;
		this.context = context;
		this.elderSpawn = elderSpawn;
		this.y = window.innerHeight
		this.isSpawned = false;
		this.name = null;
		this.hp = null;
		this.maxHP = null;
		this.mp = null;
		this.maxMP = null;
		this.fireball = new Fireball(canvas, context);

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
	}

	tick() {
		if(this.sprite != null)	{
			this.y = window.innerHeight;
			if (this.id == 1) {
				this.x = this.canvas.width * 4.5/18;
			} else if (this.id == 2) {
				this.x = this.canvas.width * 1/6;
			} else if (this.id == 3) {
				this.x = this.canvas.width * 0.8/9;
			}
			this.context.font = "16px Arial";
			this.context.fillStyle = "white";
			this.context.textAlign = "center";
			this.context.fillText(this.name, this.x, this.y - 200);
			let hpValue = this.hp + " / " + this.maxHP + " HP";
			this.context.fillText(hpValue, this.x, this.y - 180);
			let mpValue = this.mp + " / " + this.maxMP + " MP";
			this.context.fillText(mpValue, this.x, this.y - 160);
			this.sprite.tick(this.x, this.y, this.context);
			this.fireball.tick();
		}
	}

	thunder(){
		this.musicManager.playThunder();
		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/thunder_sprites.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
	}

	spawn(name, hp, maxHP, mp, maxMP) {
		this.isSpawned = true;
		this.name = name;
		this.hp = hp;
		this.maxHP = maxHP;
		this.mp = mp;
		this.maxMP = maxMP;
		this.thunder();
		setTimeout(()=>this.battleStance(), 500);
	}

	despawn() {
		this.thunder();
		this.isSpawned = false;
		this.name = null;
		this.hp = null;
		this.mp = null;
		setTimeout(()=> this.vanish(), 500);
	}

	vanish() {
		this.sprite = null;
	}

	updateStats(hp,mp) {
		this.hp = hp;
		this.mp = mp;
	}

	battleStance1(){
		let columnCount = 4;
		let rowCount = 1;
		let refreshDelay = 500;
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
		this.fireball.cast(this.x, this.y - 300, this.elderSpawn.x, this.elderSpawn.y )
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
		this.fireball.cast(this.x, this.y - 300, this.elderSpawn.x, this.elderSpawn.y )
		let columnCount = 20;
		let rowCount = 1;
		let refreshDelay = 20;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage2_sprites_attack20.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
		setTimeout(()=>this.battleStance(), refreshDelay*columnCount);
	}

	attack3(){
		this.fireball.cast(this.x, this.y - 300, this.elderSpawn.x, this.elderSpawn.y )
		let columnCount = 50;
		let rowCount = 1;
		let refreshDelay = 15;
		let loopColumns = true;
		let scale = 3.0;
		this.sprite = new TiledImage("images/mage3_sprites_attack50.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(1, columnCount);
		this.sprite.setFlipped(true);
		setTimeout(()=>this.battleStance(), 700);
	}



}