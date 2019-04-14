window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playFallen();

	setInterval( ()=> fetch("phpProcessing/availableGamesList.php", {
		credentials: 'include'})
	  .then(response => response.json())
	  .then(data => {
		  let container = document.getElementById("gamesListContainer");
		  clearChildren(container);
		  data.forEach(gameJSON => {
			  let node = document.createElement("div");
			  node.setAttribute("class", "availableGame");
			  let nameDiv = document.createElement("div");
			  nameDiv.setAttribute("class", "content");
			  let hpDiv = document.createElement("div");
			  hpDiv.setAttribute("class", "content");
			  let typeDiv = document.createElement("div");
			  typeDiv.setAttribute("class", "content");
			  let countDiv = document.createElement("div");
			  countDiv.setAttribute("class", "content");
			  let expDiv = document.createElement("div");
			  expDiv.setAttribute("class", "content");
			  setClickListener(node,gameJSON.id);
			  let textNodeName = document.createTextNode(gameJSON.name);
			  let textNodeHP = document.createTextNode(gameJSON.hp);
			  let textNodeType = document.createTextNode(gameJSON.type);
			  let playerCount = gameJSON.nb + " / " + gameJSON.max_users;
			  let textNodeNB = document.createTextNode(playerCount);
			  let expCount  = "Experience: "+ gameJSON.exp;
			  let textNodeEXP = document.createTextNode(expCount);
			  nameDiv.appendChild(textNodeName);
			  hpDiv.appendChild(textNodeHP);
			  typeDiv.appendChild(textNodeType);
			  countDiv.appendChild(textNodeNB);
			  expDiv.appendChild(textNodeEXP);
			  node.append(nameDiv);
			  node.append(hpDiv);
			  node.appendChild(typeDiv);
			  node.appendChild(countDiv);
			  node.appendChild(expDiv);
			  container.appendChild(node);
		  });
	  }),
	  2000);
}

const setClickListener = (node,id) => {
	node.onclick = () => {
		let formData = new FormData();
		formData.append("id", id);
		fetch("phpProcessing/joinGame.php", {
			method: "POST",
			credentials: 'include',
			body: formData
		}).then(response => response.json())
		.then(data => {
			if (data === "GAME_ENTERED") {
				window.location.href = "game.php";
			}
		})
	}
}

const sheikahEyeAnimation = () => {
	//alterner entre différentes positions et opacité
}
