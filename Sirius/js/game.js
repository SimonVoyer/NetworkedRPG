window.onload = () => {
	initEventListeners();
	let stateJSON;
	setInterval(fetchGameState, 2050);
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
		//.catch(error => console.error('Error:', error))
		.then(data => {
			stateJSON = data;
			showGameState()
		}
	);
}

const timeWarden = () => {

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
