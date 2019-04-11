window.onload = () => {
	let stateJSON, postFetch;
	setTimeout(fetchGameState,2000);
	let canvas = generateCanvas();
	let context = canvas.getContext("2d");
	let background = new Image(window.innerWidth,window.innerHeight);
	background.onload = () => {
		context.drawImage(background,0,0);
	}
	background.src = "images/background_inside_castle.jpg";
	let zelda = new Zelda();
	let athos = new Athos();
	initEventListeners(zelda);
	tick(canvas, context, background, zelda, athos);
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
	console.log("reactivating -> "+ button);
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

const battlePose = zelda => {
	zelda.battlePose();
}

const initEventListeners = zelda => {
	let buttonNormal = document.getElementById("attack1");
	let buttonSpecial1 = document.getElementById("attack2");
	let buttonSpecial2 = document.getElementById("attack2");

	buttonNormal.onclick = () => {
		console.log("deactivating -> "+ buttonNormal);
		buttonNormal.style.pointerevents = 'none';
		sendAttack("Normal", buttonNormal);
		zelda.basicSpell();
		setTimeout(()=> battlePose(zelda), 700);
	}
	buttonSpecial1.onclick = () => {
		sendAttack("Special1",buttonSpecial1 );
	}
	buttonSpecial2.onclick = () => {
		sendAttack("Special2", buttonSpecial2);
	}
}

const fetchGameState = () => {
	fetch("phpProcessing/gameState.php")
		.then(response => response.json())
		.then(data => {
			postFetch = new Date();
			stateJSON = data;
			showGameState(); //****debug
			setTimeout(fetchGameState, 2000);
		}
	);
}

const showGameState = () => {
	let node = document.getElementById("JSONViewer");
	clearChildren(node);
	let gameState = stateJSON.game;
	let playerState = stateJSON.player;
	let othersState = stateJSON.other_players;
	let gameName = document.createTextNode("game name: " + gameState.name);
	node.appendChild(gameName);
	let player = document.createTextNode(" ||| player name: " + playerState.name + "--- hp: " + playerState.hp )
	node.appendChild(player);
	othersState.forEach(otherPlayer => {
		let otherNode = document.createTextNode("||| other name: " + otherPlayer.name + "--- hp: " + otherPlayer.hp )
		node.appendChild(otherNode);
	});
}

const tick = (canvas, context, background, zelda, athos) => {
	context.drawImage(background,0,0);
	zelda.sprite.tick(canvas.width /2, 3*canvas.height/4 , context);
	athos.sprite.tick(canvas.width /2, canvas.height/5 , context)
	window.requestAnimationFrame(()=> tick(canvas,context,background,zelda, athos))
}
