<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	require_once("action/GameAction.php");
	$action = new GameAction();
	$action->execute();
	require_once("partial/header.php");
?>

<div id="canvasContainer"></div>

<div id="attackButtons">
	<div class="attackButton" id="attack1"></div>
	<div class="attackButton" id="attack2"></div>
	<div class="attackButton" id="attack3"></div>
</div>


<?php
	require_once("partial/footer.php");