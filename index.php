<?php
	$name = isset($_POST["name"]) ? $_POST["name"] : "";
	$email = isset($_POST["email"]) ? $_POST["email"] : "";
	$phonenumber = isset($_POST["phonenumber"]) ? $_POST["phonenumber"] : "";
	$content = isset($_POST["content"]) ? $_POST["content"] : "";
	
	$code = "200";
	$message = "ok";
	$data = array(
		'name'=> $name,
		'email'=> $email,
		'phonenumber'=> $phonenumber,
		'content'=> $content,
	);
	$data_1 = json_encode($data);

	$data = array(
		'code'=> $code,
		'message'=> $message,
		'data_json'=> $data_1,
	);

	echo json_encode($data, JSON_UNESCAPED_UNICODE);