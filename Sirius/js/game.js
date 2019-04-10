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
	initEventListeners();
	let zelda = new Zelda();
	let athos = new Athos();
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

const sendAttack = attackName => {
	let formData = new FormData();
	formData.append("skill-name", attackName);
	fetch("phpProcessing/sendAttack.php", {
		method: "POST",
		credentials: 'include',
		body: formData
	});
}

const initEventListeners = () => {

	document.getElementById("attack1").onclick = () => {
		//Normal
		console.log("Normal attack");
		sendAttack("Normal");
	}

	document.getElementById("attack2").onclick = () => {
		//Special1
		console.log("Special1 attack");
		sendAttack("Special1");
	}

	document.getElementById("attack3").onclick = () => {
		//Special2
		console.log("Special2 attack");
		sendAttack("Special2");
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


const summonAthos = (context) => {

}

const tick = (canvas, context, background, zelda, athos) => {
	context.drawImage(background,0,0);
	zelda.sprite.tick(canvas.width /2, 3*canvas.height/4 , context);
	athos.sprite.tick(canvas.width /4, 3*canvas.height/4 , context)
	window.requestAnimationFrame(()=> tick(canvas,context,background,zelda, athos))
}
