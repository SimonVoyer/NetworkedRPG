<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/VictoryAction.php");
	$action = new VictoryAction();
	$action->execute();
	require_once("partial/header.php");
?>

<video src="video/zelda_victory.mp4" autoplay></video>

<?php
	require_once("partial/footer.php");