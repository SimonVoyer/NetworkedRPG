window.onload = () => {
	initEventListeners();
	let stateJSON, postFetch;
	fetchGameState();
	setInterval(timeWarden, 700);
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
		}
	);
}

const timeWarden = () => {
	let currentTime = new Date();
	console.log(currentTime.getTime() - postFetch.getTime());
	if ( currentTime.getTime() - postFetch.getTime() >= 2050){
		fetchGameState();
	}
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
