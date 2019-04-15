window.onload = () => {
	setHeaderListeners();

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

	document.getElementById("status").onclick = () =>{

	}
}