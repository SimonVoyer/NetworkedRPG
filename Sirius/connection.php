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
	<?php
		if (isset($_SESSION["username"])) {
			?>
			<div class = "input">
				username: <input type="text" name="username" id="username_input" value=<?=$_SESSION["username"]  ?> >
			</div>
		<?php
		} else {
			?>
			<div class = "input">
				username: <input type="text" name="username" id="username_input">
			</div>
			<?php
		}
	?>

		<div class = "input">
			password: <input type="password" name="password" id="password_input">
		</div>
		<button type="submit">
			connection
		</button>

		<div id="crest"></div>

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