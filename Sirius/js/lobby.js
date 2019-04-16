let toggleStatus;

window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playFallen();
	setTimeout(()=>gameListManager(),2000);
	setHeaderListeners();
	activateStatus();
	toggleStatus = toggleStatusBlock;
	let sheikahEye = new SheikahEye();
	sheikahEye.tick();
}


const parseUserInfo = userInfo => {
	let container = document.getElementById("userInfoDiv");
	let userName = "Name: " + userInfo.name;
	let textNodeName = document.createTextNode(userName);
	let userType = "Type: "+ userInfo.type;
	let textNodeType = document.createTextNode(userType);
	let userLevel = "Magic Power Level: " + userinfo.level;
	let textNodeLevel = document.createTextNode(userLevel);
	let userEnergy = "Arcane Energy Level: " + userInfo.char_energy;
	let textNodeEnergy = document.createTextNode(userEnergy);
	let nbOfVictory = "Number of Victories: " + userInfo.victories;
	let textNodeVictory = document.createTextNode(nbofVictory);
	let welcomeText = "Battlechant: " + userInfo.welcome_text;
	let textNodeWelcome = document.createTextNode(welcomeText);

}


const fetchUserInfo = () => {
	let userInfoJSON;
	fetch("phpProcessing/userInfo.php", {
		credentials: 'include'})
	  .then(response => response.json())
	  .then(data => {
		userInfoJSON = data;
		// console.log(data);
		parseUserInfo(data);
		deactivateStatus();

	});
	toggleStatus();
	return userInfoJSON;
}

const deactivateStatus = () => {
	setTimeout(() => activateStatus(), 2000);
	document.getElementById("status").removeEventListener("click", fetchUserInfo);
}

const activateStatus = () => {
	document.getElementById("status").addEventListener("click", fetchUserInfo);
}

//Je voulais faire une vérification si display === block met à none et vice versa, mais pour une raison que j'ignore ça n'a pas fonctionné, alors petit workaround
const toggleStatusNone = () => {
	document.getElementById("statusDiv").style.display = "none";
	toggleStatus = toggleStatusBlock;
}

const toggleStatusBlock = () => {
	document.getElementById("statusDiv").style.display = "block";
	toggleStatus = toggleStatusNone;
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

const gameListManager = () => {
	fetch("phpProcessing/availableGamesList.php", {
		credentials: 'include'})
	  .then(response => response.json())
	  .then(data => {
		  console.log(data);
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
			  let playerCount = gameJSON.nb + "  on  " + gameJSON.max_users;
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
		 setTimeout(()=>gameListManager(),2000);
	});
}
