window.onload = () => {
	musicManager = new MusicManager();
	musicManager.playDoom();
	setTimeout(() =>window.location.href = "lobby.php", 7000);

}