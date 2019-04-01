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
	</div>

	<div id="gamesListContainer">

	</div>

<?php
	require_once("partial/footer.php");