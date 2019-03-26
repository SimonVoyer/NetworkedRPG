<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/CommonAction.php");

	class SendAttackAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);

		}

		protected function executeAction() {
			$data = [];
			$data["key"] = $_SESSION["key"];

		}

	}