<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/GameStateAction.php");
	$action = new GameStateAction();
	$action->execute();
	echo json_encode($action->APIResponse);
