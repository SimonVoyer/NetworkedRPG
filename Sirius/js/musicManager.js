class MusicManager {
	constructor() {
		this.couragePath = "audio/Zelda Main Theme Song.mp3"
		this.lullabyPath =  "audio/Hollow Knight OST - Shade Theme.mp3"
		this.nightmarePath = "audio/The Troupe Master (Grimm + Nightmare King) - Hollow Knight The Grimm Troupe DLC OST.mp3"
		this.fallenPath = "audio/hyrule-castle-the-legend-of-zelda-breath-of-the-wild-ost.mp3"
		this.masterSwordPath = "audio/Master Sword - The Legend of Zelda Ocarina of Time.mp3"
	}

	playLullaby() {
		let lullaby = new Audio(this.lullabyPath);
		lullaby.loop = true;
		lullaby.play();
	}


	playNightmare() {
		let nightmare = new Audio(this.nightmarePath);
		nightmare.loop = true;
		nightmare.play();
	}

	playFallen() {
		let fallen = new Audio(this.fallenPath)
		fallen.loop = true;
		fallen.play();
	}

	playCourage() {
		let courage = new Audio(this.couragePath)
		courage.loop = true;
		courage.play();
	}

	playMasterSword() {
		let masterSword = new Audio(this.masterSwordPath)
		masterSword.loop = false;
		masterSword.play();
	}


	playSpell() {

	}



}