<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/VictoryAction.php");
	$action = new VictoryAction();
	$action->execute();


	require_once("partial/header.php");
?>
u win
<?php
	require_once("partial/footer.php");