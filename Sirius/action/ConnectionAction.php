<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/CommonAction.php");

	class ConnectionAction extends CommonAction {

		public $isConnected;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);

		}

		protected function executeAction() {
			if (!empty($_POST["username"]) && !empty($_POST["password"])) {
				$data = [];
				$data["username"] = $_POST["username"];
				$data["pwd"] = $_POST["password"];
				$serverResponse = $this->callAPI("signin", $data);
				if (preg_match('/_/', $serverResponse) === 0) {
					$_SESSION["key"] = $serverResponse;
					$_COOKIE["username"] = $_POST["username"];
					$this->isConnected = true;
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					header("location:lobby.php");
					exit;
				} else if(preg_match('/_/', $serverResponse) === 1) {
					$this->isConnected = false;
				}
			}
		}

	}
