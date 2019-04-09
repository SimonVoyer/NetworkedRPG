<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	require_once("action/ConnectionAction.php");
	$action = new ConnectionAction();
	$action->execute();


	require_once("partial/header.php");
?>

	<form action="connection.php" method="post">
		<div class = "input">
			username: <input type="text" name="username" id="username_input">
		</div>
		<div class = "input">
			password: <input type="password" name="password" id="password_input">
		</div>
		<button type="submit">
			connection
		</button>
		<div>
			<?php
				 if (isset($action->isConnected) && !$action->isConnected ){
					?>
						connection unsuccessful

					<?php
				}
			?>
		</div>
	</form>

	<?php
	require_once("partial/footer.php");