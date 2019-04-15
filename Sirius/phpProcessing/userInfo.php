<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	require_once("../action/UserInfoAction.php");
	$action = new UserInfoAction();
	$action->execute();
	echo json_encode($action->APIResponse);
