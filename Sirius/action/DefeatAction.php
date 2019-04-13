<?php

	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("CommonAction.php");

	class DefeatAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {

		}
	}