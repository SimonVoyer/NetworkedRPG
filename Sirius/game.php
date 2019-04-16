<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	require_once("action/GameAction.php");
	$action = new GameAction();
	$action->execute();
	require_once("partial/header.php");
?>

<!-- <div id="portraitContainer">
	<img src="images/zelda_portrait_150x156.png" alt="portrait_of_zelda" id="portrait">
</div> -->

<div id="canvasContainer">
	<canvas width=1600 height=700></canvas>
</div>

<div id="attackButtons">
	<div class="attackButton" id="attack1"></div>
	<div class="attackButton" id="attack2"></div>
	<div class="attackButton" id="attack3"></div>
</div>


<?php
	require_once("partial/footer.php");