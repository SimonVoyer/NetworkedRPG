window.onload = () => {
	let stateJSON, postFetch;
	let musicManager = new MusicManager();
	musicManager.playNightmare();

	let canvas = generateCanvas();
	let context = canvas.getContext("2d");
	let background = new Image(window.innerWidth,window.innerHeight);
	background.onload = () => {
		context.drawImage(background,0,0);
	}
	background.src = "images/background_inside_castle.jpg";
	let zelda = new Zelda(musicManager, canvas, context);
	let ganon = new Ganon(musicManager, canvas, context);
	setTimeout(()=>fetchGameState(zelda,ganon),2000);
	initEventListeners(zelda,ganon);
	tick( background, context, zelda, ganon);
}
const generateCanvas = () => {
	let canvas = document.createElement('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.zIndex = -1;
	document.getElementById("canvasContainer").appendChild(canvas)
	return canvas;
}

const reactivateButton = button => {
	button.style.pointerevents = 'auto';
}


const sendAttack = (attackName, button) => {
	let formData = new FormData();
	formData.append("skill-name", attackName);
	fetch("phpProcessing/sendAttack.php", {
		method: "POST",
		credentials: 'include',
		body: formData
	});
	setTimeout( ()=> reactivateButton(button), 2000);
}

const initEventListeners = (zelda,ganon) => {
	let buttonNormal = document.getElementById("attack1");
	let buttonSpecial1 = document.getElementById("attack2");
	let buttonSpecial2 = document.getElementById("attack3");

	buttonNormal.onclick = () => {
		//buttonNormal.style.pointerevents = 'none';
		sendAttack("Normal", buttonNormal);
		zelda.basicSpell();
		setTimeout(()=> zelda.battlePose(), 700);
	}

	buttonSpecial1.onclick = () => {
		sendAttack("Special1",buttonSpecial1 );
		setTimeout(()=> zelda.hover(),300);
		setTimeout(()=> zelda.land(),2000)
		setTimeout(()=> zelda.battlePose(), 2200);
		zelda.startJump();
	}

	buttonSpecial2.onclick = () => {
		sendAttack("Special2", buttonSpecial2);
		zelda.summonSpirit();
		ganon.attack();
	}
}

const stateDispatcher = (ganon,zelda) => {
	if (stateJSON.game.attacked){
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
	context.drawImage(background,0,0);
	zelda.tick();
	ganon.tick();
	window.requestAnimationFrame(()=> tick(background, context, zelda, ganon));
}
