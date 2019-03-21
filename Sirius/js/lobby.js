window.onload = () => {


	setInterval( ()=> fetch('phpProcessing/availableGamesList.php')
	  .then(response => response.json())
	  .then(data => {
		  let container = document.getElementById("gamesListContainer");
		  clearChildren(container);
		  data.forEach(gameJSON => {
			  let node = document.createElement("div");
			  node.setAttribute("class", "availableGame");
			  let textNode = document.createTextNode(gameJSON.name);
		      node.appendChild(textNode);
			  container.appendChild(node);
		  });
	  }),
	  2500)






}

//source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
const clearChildren = node => {
	while (node.firstChild){
		node.removeChild(node.firstChild);
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