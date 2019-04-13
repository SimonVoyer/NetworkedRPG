window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playCourage();
	let crest = new Crest();
	tick(crest);
}

const tick = crest => {
	crest.tick();
	window.requestAnimationFrame(()=>tick(crest));
}