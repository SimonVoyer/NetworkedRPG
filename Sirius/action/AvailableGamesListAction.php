<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("CommonAction.php");

	class AvailableGamesListAction extends CommonAction {
		public $APIResponse;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$data = [];
			$data["key"] = $_SESSION["key"];
			$this->APIResponse = $this->callAPI("list", $data);
		}
	}