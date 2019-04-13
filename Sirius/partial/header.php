<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Projet Sirius - Simon Voyer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" media="screen" href="css/shared.css" />
	<?php
		if (preg_match("/connection.php/", $_SERVER["PHP_SELF"]) === 1 ) {
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/connection.css" />
				<script src="js/connection.js"></script>
				<script src="js/crest.js"></script>
			<?php
		} else if (preg_match("/lobby.php/", $_SERVER["PHP_SELF"]) === 1){
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/lobby.css" />
				<script src="js/lobby.js"></script>
			<?php
		} else if (preg_match("/game.php/", $_SERVER["PHP_SELF"]) === 1) {
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/game.css" />
				<script src="js/TiledImage.js"></script>
				<script src="js/game.js"></script>
				<script src="js/zelda.js"></script>
				<script src="js/athos.js"></script>
				<script src="js/elderSpawn.js"></script>
				<script src="js/allies.js"></script>
			<?php
		} else if (preg_match("/victory.php/", $_SERVER["PHP_SELF"]) === 1){
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/victory.css" />
				<script src="js/victory.js"></script>
			<?php
		} else if (preg_match("/defeat.php/", $_SERVER["PHP_SELF"]) === 1){
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/defeat.css" />
				<script src="js/defeat.js"></script>
			<?php
		}
	?>
	<script src="js/utilities.js"></script>
	<script src="js/musicManager.js"></script>
</head>
<body>