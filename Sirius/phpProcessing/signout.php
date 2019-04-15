<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/SignoutAction.php");
	$action = new SignoutAction();
	$action->execute();

	echo json_encode($action->APIResponse);
