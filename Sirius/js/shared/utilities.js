//source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
const clearChildren = node => {
	if (node.firstChild) {
		clearChildren(node.firstChild);
		while (node.firstChild){
	 		node.removeChild(node.firstChild);
	 	}
	}
}

const setHeaderListeners = () => {
	document.getElementById("disconnect").onclick = () =>{
		fetch("phpProcessing/signout.php", {
			credentials: 'include'})
		  .then(response => response.json())
		  .then(data => {
			  if (data == "USER_SIGNED_OUT") {
				window.location.href = "connection.php";
			}
		});
	}
}
