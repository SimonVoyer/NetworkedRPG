<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Projet Sirius - Simon Voyer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" media="screen" href="css/shared.css" />
	<?php
		if (preg_match("/connexion.php/", $_SERVER["PHP_SELF"]) === 1 ) {
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/connexion.css" />
			<?php
		} else if (preg_match("/lobby.php/", $_SERVER["PHP_SELF"]) === 1){
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/lobby.css" />
			<?php
		} else if (preg_match("/game.php/", $_SERVER["PHP_SELF"]) === 1) {
			?>
				<link rel="stylesheet" type="text/css" media="screen" href="css/game.css" />
			<?php
		}
	?>
	<script src="js/utilities.js"></script>
</head>
<body>