

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
	activateStatus();
}


const fetchUserInfo = () => {
	fetch("phpProcessing/userInfo.php", {
		credentials: 'include'})
	  .then(response => response.json())
	  .then(data => {
		console.log(data);
		deactivateStatus();
	});
}

const deactivateStatus = () => {
	setTimeout(() => activateStatus(), 2000);
	document.getElementById("status").removeEventListener("click", fetchUserInfo);
}

const activateStatus = () => {
	document.getElementById("status").addEventListener("click", fetchUserInfo);
}
