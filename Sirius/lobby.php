<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/LobbyAction.php");
	$action = new LobbyAction();
	$action->execute();


	require_once("partial/header.php");
?>
	<script src="js/lobby.js"></script>
	<div id="testBox">
		<p>Welcome to the lobby</p>
		<a href="game.php"><button id="startButton">Start</button></a>
	</div>

	<div id="gamesListContainer">

	</div>
<?php
	require_once("partial/footer.php");