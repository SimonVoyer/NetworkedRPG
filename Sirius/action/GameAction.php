<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/CommonAction.php");

	class GameAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);

		}

		protected function executeAction() {

		}
	}