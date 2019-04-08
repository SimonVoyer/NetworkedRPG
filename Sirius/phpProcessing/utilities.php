<?php

	function getCurrentFile($path) {
		$pathArray = preg_split("[\]", $path);
		return $pathArray[sizeof($pathArray)];
	}
