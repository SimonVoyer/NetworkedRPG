let isButtonActive = true;
let isVictorious = false;
let isDefeated = false;

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
	let ganon = new Ganon(musicManager, canvas, context);
	setTimeout(()=>fetchGameState(zelda,ganon),2000);
	initEventListeners(zelda);
	tick( background, context, zelda, ganon);
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

const initEventListeners = (zelda) => {
	let buttonNormal = document.getElementById("attack1");
	let buttonSpecial1 = document.getElementById("attack2");
	let buttonSpecial2 = document.getElementById("attack3");

	buttonNormal.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Normal", buttonNormal);
			zelda.basicSpell();
			setTimeout(()=> zelda.battlePose(), 700);
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
		}
	}

	buttonSpecial2.onclick = () => {
		if (isButtonActive){
			deactivateButtons();
			sendAttack("Special2", buttonSpecial2);
			zelda.summonSpirit();
		}
	}
}

const stateDispatcher = (ganon,zelda) => {
	isVictorious = /WIN/.test(stateJSON);
	isDefeated =  /LOST/.test(stateJSON);
	if (stateJSON.game.attacked === true){
		setTimeout(()=> zelda.tookDamage(),300)
		ganon.attack();
}
}

const fetchGameState = (zelda,ganon) => {
	fetch("phpProcessing/gameState.php")
		.then(response => response.json())
		.then(data => {
			postFetch = new Date();
			stateJSON = data;
			console.log(JSON.stringify(data));
			stateDispatcher(ganon,zelda);
			setTimeout(()=>fetchGameState(zelda,ganon), 2000);
		}
	);
}

const tick = ( background, context, zelda, ganon) => {
	if (isVictorious) {
		window.location.href = "victory.php";
	} else if (isDefeated) {
		window.location.href = "defeat.php";
	}
	context.canvas.width = innerWidth;
	context.canvas.height = window.innerHeight;
	context.drawImage(background,0,0);
	zelda.tick();
	ganon.tick();
	window.requestAnimationFrame(()=> tick(background, context, zelda, ganon));
}
