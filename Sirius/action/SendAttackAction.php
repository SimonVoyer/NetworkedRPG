<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/CommonAction.php");

	class SendAttackAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);

		}

		protected function executeAction() {

			if (isset($_POST["skill-name"]) && isset($_SESSION["key"]) ) {
				$data = [];
				$data["key"] = $_SESSION["key"];
				$data["skill-name"] = $_POST["skill-name"];
				$_SESSION["attackResponse"] = $this->callAPI("action",$data );
			}
		}

	}