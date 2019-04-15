let isButtonActive = true;
let isVictorious = false;
let isDefeated = false;
let isDisconnected = false;
let allyCount = 0;
window.onload = () => {
	let stateJSON, postFetch;
	let musicManager = new MusicManager();
	musicManager.playNightmare();
	let canvas = document.querySelector("canvas");
	let context = canvas.getContext("2d");
	let background = new Image();
	background.onload = () => {
		context.drawImage(background,0,0);
	}
	background.src = "images/background_inside_castle.jpg";
	let elderSpawn = new ElderSpawn(musicManager, canvas, context);
	let zelda = new Zelda(musicManager, canvas, context, elderSpawn);
	let allies = [new Allies(1, musicManager, canvas, context,elderSpawn), new Allies(2, musicManager, canvas, context,elderSpawn),new Allies(3, musicManager, canvas, context,elderSpawn) ];


	setTimeout(()=>fetchGameState(zelda,elderSpawn, allies),2000);
	initEventListeners(zelda, elderSpawn);
	tick( background, context, zelda, elderSpawn, allies);
}

const reactivateButtons = () => {
	isButtonActive = true;
}

const deactivateButtons = () => {
	isButtonActive = false;
	setTimeout(reactivateButtons, 2000);
}

const sendAttack = (attackName) => {
	let formData = new FormData();
	formData.append("skill-name", attackName);
	fetch("phpProcessing/sendAttack.php", {
		method: "POST",
		credentials: 'include',
		body: formData
	});
}

const initEventListeners = (zelda, elderSpawn) => {
	let buttonNormal = document.getElementById("attack1");
	let buttonSpecial1 = document.getElementById("attack2");
	let buttonSpecial2 = document.getElementById("attack3");
	//pour désactiver, mettre le onclick à une function qui retourne false ou null
	buttonNormal.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Normal", buttonNormal);
			zelda.basicSpell();
			setTimeout(()=> elderSpawn.tookDamage(), 350);
		}
	}

	buttonSpecial1.onclick = () => {
		if (isButtonActive) {
			deactivateButtons();
			sendAttack("Special1",buttonSpecial1 );
			setTimeout(()=> zelda.hover(),300);
			setTimeout(()=> zelda.land(),2000)
			setTimeout(()=> zelda.battlePose(), 2200);
			zelda.startJump();
			setTimeout(()=> elderSpawn.tookDamage(), 1500);
		}
	}

	buttonSpecial2.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Special2", buttonSpecial2);
			zelda.basicSpell(false);
			zelda.summonSpirit();
			setTimeout(()=> elderSpawn.tookDamage(),500);
		}
	}
}

const mageSpawnManager = allies => {
	for (let index = 0; index < allies.length; ++index) {
		const mage = allies[index];
		const playerJSON = stateJSON.other_players[index];
		if (mage.id <= stateJSON.other_players.length && mage.isSpawned === false) {
			mage.spawn(playerJSON.name, playerJSON.hp, playerJSON.max_hp, playerJSON.mp, playerJSON.max_mp);
		} else if (mage.id > stateJSON.other_players.length && mage.isSpawned === true) {
			mage.despawn();
		}
	}
}

const mageAttackManager = allies => {
	for (let index = 0; index < stateJSON.other_players.length; ++index) {
		const playerJSON = stateJSON.other_players[index];
		console.log(playerJSON);
		console.log("ally at current index = "+ allies[index] + "-- index being = " + index);
		if (playerJSON.attacked !== "--") {
			if (allies[index].isSpawned === true){
				allies[index].attack();
				setTimeout(()=>allies[index].elderSpawn.tookDamage(), 300);
			}
		}
	}
}

const stateDispatcher = (elderSpawn,zelda, allies) => {
	isVictorious = /WIN/.test(stateJSON);
	isDefeated =  /LOST/.test(stateJSON);
	isDisconnected =  /USER/.test(stateJSON);
	if (stateJSON.game.attacked === true){
		setTimeout(()=> zelda.tookDamage(),300)
		elderSpawn.attack();
	}
	mageSpawnManager(allies);
	mageAttackManager(allies);
}

const fetchGameState = (zelda,elderSpawn, allies) => {
	fetch("phpProcessing/gameState.php", {
		credentials: 'include'})
		.then(response => response.json())
		.then(data => {
			postFetch = new Date();
			stateJSON = data;
			console.log(JSON.stringify(data));
			stateDispatcher(elderSpawn,zelda, allies);
			setTimeout(()=>fetchGameState(zelda,elderSpawn, allies), 2000);
		}
	);
}

const victorious = () => {
	window.location.href = "victory.php";
}

const defeated = ()=>{
	window.location.href = "defeat.php";
}


const tick = ( background, context, zelda, elderSpawn, allies) => {
	if (isVictorious) {
		isVictorious = false;
		elderSpawn.isAlive = false;
		elderSpawn.banished();
		setTimeout( ()=> victorious(), 3000);
	} else if (isDefeated) {
		isDefeated = false;
		elderSpawn.attack();
		zelda.down();
		setTimeout( ()=> defeated(), 2000);
	} else if (isDisconnected){
		window.location.href = "connection.php";
	}

	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	context.drawImage(background,0,0);
	elderSpawn.tick();
	allies.forEach(mage => {
		mage.tick();
	});
	zelda.tick();
	window.requestAnimationFrame(()=> tick(background, context, zelda, elderSpawn, allies));
}
