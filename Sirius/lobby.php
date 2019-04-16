<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/LobbyAction.php");
	$action = new LobbyAction();
	$action->execute();


	require_once("partial/header.php");
?>

	<div id="eye"></div>
	<div id="gamesListContainer"></div>
	<div id="statusDiv">
		<div id="userInfoDiv"></div>
	</div>
<?php
	require_once("partial/footer.php");