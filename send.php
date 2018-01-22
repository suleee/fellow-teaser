<?php
$mail = trim($_POST['mail']);
// echo strlen($mail);
if (strlen($mail) > 5) {
	$servername = "127.0.0.1";
	$username = "root";
	$password = "#fellow@web";
	$dbname = "emails";

	$conn = new mysqli($servername, $username, $password, $dbname);

	// if (!$conn) {
	//     die("Connection failed: " . mysqli_connect_error());
	// }

	

	$stmt = $conn->prepare("INSERT INTO email (email, ip) VALUES (?, ?)");
	$stmt->bind_param("ss", $email, $ip);

	$email = $mail;
	$ip = $_SERVER['REMOTE_ADDR']?:($_SERVER['HTTP_X_FORWARDED_FOR']?:$_SERVER['HTTP_CLIENT_IP']);

	$stmt->execute();
	// printf("Error: %s.\n", $stmt->error);
	$stmt->close();
	$conn->close();
}

?>