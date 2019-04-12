window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playFallen();

	setInterval( ()=> fetch("phpProcessing/availableGamesList.php")
	  .then(response => response.json())
	  .then(data => {
		  let container = document.getElementById("gamesListContainer");
		  clearChildren(container);
		  data.forEach(gameJSON => {
			  let node = document.createElement("div");
			  node.setAttribute("class", "availableGame");
			  setClickListener(node,gameJSON.id);
			  let textNode = document.createTextNode(gameJSON.name);
		      node.appendChild(textNode);
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

//stuff dans json

// public 'id' => string '4' (length=1)
// public 'name' => string 'Void 4' (length=6)
// public 'level' => string '0' (length=1)
// public 'hp' => string '1000' (length=4)
// public 'max_users' => string '4' (length=1)
// public 'type' => string 'Heal' (length=4)
// public 'current_last_action' => string '0' (length=1)
// public 'current_hp' => string '1000' (length=4)
// public 'win_count' => string '0' (length=1)
// public 'loss_count' => string '0' (length=1)
// public 'last_target' => null
// public 'nb' => string '0' (length=1)
// public 'exp' => int 0