class MusicManager {

	constructor() {
		this.couragePath = "audio/Zelda Main Theme Song.mp3";
		this.nightmarePath = "audio/The Troupe Master (Grimm + Nightmare King) - Hollow Knight The Grimm Troupe DLC OST.mp3";
		this.fallenPath = "audio/hyrule-castle-the-legend-of-zelda-breath-of-the-wild-ost.mp3";
		this.masterSwordPath = "audio/Master Sword - The Legend of Zelda Ocarina of Time.mp3";
		this.damagePath = "audio/zelda_sounds/zelda_damage.mp3";
		this.spellPath = "audio/zelda_sounds/zelda_spell.mp3";
		this.spell2Path = "audio/zelda_sounds/zelda_spell2.mp3";
		this.fallingPath = "audio/zelda_sounds/zelda_falling.mp3";
		this.demonAttackPath = "audio/demon_sounds/demon_attack.mp3";
		this.demonBanished = "audio/demon_sounds/demon_banished.mp3";
		this.spiritCastPath = "audio/zelda_sounds/wise_spirit_casting.mp3";
		this.doomPath = "audio/Ilgynoth_the _heart_of_Corruption.mp3";
		this.thunderPath = "audio/spawn_sfx.mp3";
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

	playHoveringSpell() {
		let spell2 = new Audio(this.spell2Path)
		spell2.loop = false;
		spell2.play();
	}

	playDemonAttack(){
		let demonAttack = new Audio(this.demonAttackPath)
		demonAttack.loop = false;
		demonAttack.play();
	}

	playSpiritCast() {
		let spiritCast = new Audio(this.spiritCastPath)
		spiritCast.loop = false;
		spiritCast.volume = 0.5;
		spiritCast.play();
	}

	playDown() {
		let down = new Audio(this.fallingPath)
		down.loop = false;
		down.play();
	}

	playDoom() {
		let doom = new Audio(this.doomPath)
		doom.loop = false;
		doom.play();
	}

	playThunder() {
		let thunder = new Audio(this.thunderPath)
		thunder.loop = false;
		thunder.volume = 0.1;
		thunder.play();
	}

	playDemonBanished() {
		let demonBanished = new Audio(this.demonBanishedPath)
		demonBanished.loop = false;
		//demonBanished.volume = 0.1;
		demonBanished.play();
	}


}