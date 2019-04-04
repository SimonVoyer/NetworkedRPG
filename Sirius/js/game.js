require("utilities.js");

window.onload = () => {

	initEventListeners();

	setInterval( ()=>,
	2500)


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
		.then(data => { return data });
}

const showGameState = stateJSON => {
	let container = document.getElementById("JSONViewer");
	clearChildren(container);
	let gameState = stateJSON.game;
	let playerState = stateJSON.player;
	let othersState = stateJSON.other_players;




	node.appendChild(textNode);
	container.appendChild(node);


}
