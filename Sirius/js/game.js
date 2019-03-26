window.onload = () => {

	initEventListeners();




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
