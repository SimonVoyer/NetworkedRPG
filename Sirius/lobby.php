<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/LobbyAction.php");
	$action = new LobbyAction();
	$action->execute();


	require_once("partial/header.php");
?>


<p>Welcome to the lobby</p>


<?php
	require_once("partial/footer.php");