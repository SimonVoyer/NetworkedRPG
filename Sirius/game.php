<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/GameAction.php");
	$action = new GameAction();
	$action->execute();


	require_once("partial/header.php");
?>
<script src="js/game.js"></script>
<p>Welcome to the game</p>

<div id="attackButtons">
	<div class="attackButton" id="attack1" >

	</div>

	<div class="attackButton" id="attack2">

	</div>

	<div class="attackButton" id="attack3">

	</div>
</div>

<?php
	if(isset($_POST["attackResponse"])){
		?>

		<?= $_POST["attackResponse"] ?>

		<?php
	}
?>

<?php
	require_once("partial/footer.php");