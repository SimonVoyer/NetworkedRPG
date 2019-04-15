<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/AvailableGamesListAction.php");
	$action = new AvailableGamesListAction();
	$action->execute();
	echo json_encode($action->APIResponse);
