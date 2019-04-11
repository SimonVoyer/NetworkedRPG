class MusicManager {

	constructor() {
		this.couragePath = "audio/Zelda Main Theme Song.mp3"
		this.lullabyPath =  "audio/Hollow Knight OST - Shade Theme.mp3"
		this.nightmarePath = "audio/The Troupe Master (Grimm + Nightmare King) - Hollow Knight The Grimm Troupe DLC OST.mp3"
		this.fallenPath = "audio/hyrule-castle-the-legend-of-zelda-breath-of-the-wild-ost.mp3"
		this.masterSwordPath = "audio/Master Sword - The Legend of Zelda Ocarina of Time.mp3"
		this.damagePath = "audio/zelda_sounds/zelda_damage.mp3"
		this.spellPath = "audio/zelda_sounds/zelda_spell.mp3"
		this.spell2Path = "audio/zelda_sounds/zelda_spell2.mp3"
		this.fallingPath = "audio/zelda_sounds/zelda_falling.mp3"
	}

	playLullaby() {
		let lullaby = new Audio(this.lullabyPath);
		lullaby.loop = true;
		lullaby.play();
	}

	playNightmare() {
		let nightmare = new Audio(this.nightmarePath);
		nightmare.loop = true;
		nightmare.volume = 0.1;
		nightmare.play();
	}

	playFallen() {
		let fallen = new Audio(this.fallenPath)
		fallen.loop = true;
		fallen.volume = 0.2;
		fallen.play();
	}

	playCourage() {
		let courage = new Audio(this.couragePath)
		courage.loop = true;
		courage.volume = 0.2;
		courage.play();
	}

	playMasterSword() {
		let masterSword = new Audio(this.masterSwordPath)
		masterSword.loop = false;
		masterSword.play();
	}

	playDamage() {
		let damage = new Audio(this.damagePath)
		damage.loop = false;
		damage.play();
	}

	playSpell() {
		let spell = new Audio(this.spellPath)
		spell.loop = false;
		spell.play();
	}
}