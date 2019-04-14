window.onload = () => {
	let musicManager = new MusicManager();
	musicManager.playFanfare();
	setTimeout(() =>window.location.href = "lobby.php", 5000);
}