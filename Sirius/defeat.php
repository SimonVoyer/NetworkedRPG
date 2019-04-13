<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/DefeatAction.php");
	$action = new DefeatAction();
	$action->execute();


	require_once("partial/header.php");
?>
u ded
<?php
	require_once("partial/footer.php");