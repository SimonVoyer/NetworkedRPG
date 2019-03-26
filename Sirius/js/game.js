window.onload = () => {

	initEventListeners();




}

const sendAttack = attackName => {
	let formData = new FormData();
	formData.append("skill-name", attackName);
	fetch("sendAttack.php", {
		method: "POST",
		credentials: 'include',
		body: formData
	});
}


const initEventListeners = () => {

	document.getElementById("attack1").onclick = () => {
		//Normal
		console.log("Normal attack");

	}

	document.getElementById("attack2").onclick = () => {
		//Special1
		console.log("Special1 attack");

	}

	document.getElementById("attack3").onclick = () => {
		//Special2
		console.log("Special2 attack");
	}


}
