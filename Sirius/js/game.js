let isButtonActive = true;
let isVictorious = false;
let isDefeated = false;
let isDisconnected = false;
let allyCount = 0;
let elderSpawn, zelda, allies;
let stateJSON, postFetch;

window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playNightmare();
	let canvas = document.querySelector("canvas");
	let context = canvas.getContext("2d");
	let background = new Image();
	background.onload = () => {
		context.drawImage(background,0,0);
	}
	background.src = "images/background_inside_castle.jpg";
	elderSpawn = new ElderSpawn(musicManager, canvas, context);
	zelda = new Zelda(musicManager, canvas, context, elderSpawn);
	allies = [new Allies(1, musicManager, canvas, context,elderSpawn), new Allies(2, musicManager, canvas, context,elderSpawn),new Allies(3, musicManager, canvas, context,elderSpawn) ];
	setTimeout(()=>fetchGameState(),2000);
	setHeaderListeners();
	initEventListeners();
	tick( background, context);
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

const normalButton = () => {
	sendAttack("Normal");
	deactivateButtons();
	zelda.basicSpell();
	setTimeout(()=> elderSpawn.tookDamage(), 350);

}

const specialButton1 = () => {
	sendAttack("Special1");
	deactivateButtons();
	setTimeout(()=> zelda.hover(),300);
	setTimeout(()=> zelda.land(),2000)
	setTimeout(()=> zelda.battlePose(), 2200);
	zelda.startJump();
	setTimeout(()=> elderSpawn.tookDamage(), 1500);

}

const specialButton2 = () =>{
	sendAttack("Special2");
	deactivateButtons();
	zelda.basicSpell(false);
	zelda.summonSpirit();
	setTimeout(()=> elderSpawn.tookDamage(),500);
}

const deactivateButtons = () => {
	document.getElementById("attack1").removeEventListener("click", normalButton);
	document.getElementById("attack2").removeEventListener("click", specialButton1);
	document.getElementById("attack3").removeEventListener("click", specialButton2);
	setTimeout(()=>initEventListeners(),2000);

}


const initEventListeners = () => {
	document.getElementById("attack1").addEventListener("click",  normalButton);
	document.getElementById("attack2").addEventListener("click",  specialButton1);
	document.getElementById("attack3").addEventListener("click", specialButton2);
}

const mageSpawnManager =() => {
	for (let index = 0; index < allies.length; ++index) {
		const mage = allies[index];
		const playerJSON = stateJSON.other_players[index];
		if (mage.isSpawned === true) {
			mage.updateStats(playerJSON.hp, playerJSON.mp)
		}
		if (mage.id <= stateJSON.other_players.length && mage.isSpawned === false) {
			mage.spawn(playerJSON.name, playerJSON.hp, playerJSON.max_hp, playerJSON.mp, playerJSON.max_mp);
		} else if (mage.id > stateJSON.other_players.length && mage.isSpawned === true) {
			mage.despawn();
		}
	}
}

const mageAttackManager = () => {
	for (let index = 0; index < stateJSON.other_players.length; ++index) {
		const playerJSON = stateJSON.other_players[index];
		if (playerJSON.attacked !== "--") {
			if (allies[index].isSpawned === true){
				allies[index].attack();
				setTimeout(()=>allies[index].elderSpawn.tookDamage(), 300);
			}
		}
	}
}

const stateDispatcher = () => {
	isVictorious = /WIN/.test(stateJSON);
	isDefeated =  /LOST/.test(stateJSON);
	isDisconnected =  /USER/.test(stateJSON);
	if (stateJSON.game.attacked === true){
		setTimeout(()=> zelda.tookDamage(),300)
		elderSpawn.attack();
	}
	mageSpawnManager();
	mageAttackManager();
}

const fetchGameState = ( ) => {
	fetch("phpProcessing/gameState.php", {
		credentials: 'include'})
		.then(response => response.json())
		.then(data => {
			postFetch = new Date();
			stateJSON = data;
			console.log(JSON.stringify(data));
			stateDispatcher();
			setTimeout(()=>fetchGameState(), 2000);
		}
	);
}

const victorious = () => {
	window.location.href = "victory.php";
}

const defeated = ()=>{
	window.location.href = "defeat.php";
}


const tick = ( background, context) => {
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
	window.requestAnimationFrame(()=> tick(background, context));
}
