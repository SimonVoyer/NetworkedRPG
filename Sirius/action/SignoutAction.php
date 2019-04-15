<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("../action/CommonAction.php");

	class SignoutAction extends CommonAction {
		public $APIResponse;
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);

		}

		protected function executeAction() {
			if (isset($_SESSION["key"]) ) {
				$data = [];
				$data["key"] = $_SESSION["key"];
				$this->APIResponse = $this->callAPI("signout",$data );
			}
		}
	}