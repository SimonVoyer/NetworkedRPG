let isButtonActive = true;
let isVictorious = false;
let isDefeated = false;
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
	let zelda = new Zelda(musicManager, canvas, context);
	let allies = [new Allies(1, musicManager, canvas, context), new Allies(2, musicManager, canvas, context), ,new Allies(3, musicManager, canvas, context) ]
	let elderSpawn = new ElderSpawn(musicManager, canvas, context);

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
	buttonNormal.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Normal", buttonNormal);
			zelda.basicSpell();
			setTimeout(()=> zelda.battlePose(), 700);
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
			setTimeout(()=> elderSpawn.tookDamage(), 2000);
		}
	}

	buttonSpecial2.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Special2", buttonSpecial2);
			zelda.summonSpirit();
			setTimeout(()=> elderSpawn.tookDamage(),2000);
		}
	}
}

const mageSpawnManager = allies => {
	//console.log("in mage spawn");
	//console.log("allies = "+ allies);

	allies.forEach(mage => {
		console.log("in spawn manager : mageid = " + mage.id + " length = "+ stateJSON.other_players.length);
		if (mage.id <= stateJSON.other_players.length && mage.isSpawned === false) {
			mage.spawn();
		} else if (mage.id > stateJSON.other_players.length && mage.isSpawned === true) {
			mage.despawn();
		}
	});
}

const mageAttackManager = allies => {
	//console.log("in mage attack");
	for (let index = 0; index < stateJSON.other_players.length; ++index) {
		const playerJSON = stateJSON.other_players[index];
		if (playerJSON.attacked !== "--") {
			if (allies[index].isSpawned === true){
				allies[index].attack();
			}
		}
	}
}


const stateDispatcher = (elderSpawn,zelda, allies) => {
	isVictorious = /WIN/.test(stateJSON);
	isDefeated =  /LOST/.test(stateJSON);
	if (stateJSON.game.attacked === true){
		setTimeout(()=> zelda.tookDamage(),300)
		elderSpawn.attack();
	}
	console.log("under attack check");

	mageSpawnManager(allies);
	mageAttackManager(allies);



}

const fetchGameState = (zelda,elderSpawn, allies) => {
	fetch("phpProcessing/gameState.php")
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
	}

	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	context.drawImage(background,0,0);
	zelda.tick();
	elderSpawn.tick();
	allies.forEach(mage => {
		mage.tick();
	});
	window.requestAnimationFrame(()=> tick(background, context, zelda, elderSpawn, allies));
}
