<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/SendAttackAction.php");
	$action = new SendAttackAction();
	$action->execute();