<?php

function require_auth() {
	$AUTH_USER = 'noname';
	$AUTH_PASS = '2long4you!@#';
	header('Cache-Control: no-cache, must-revalidate, max-age=0');
	$has_supplied_credentials = !(empty($_SERVER['PHP_AUTH_USER']) && empty($_SERVER['PHP_AUTH_PW']));
	$is_not_authenticated = (
		!$has_supplied_credentials ||
		$_SERVER['PHP_AUTH_USER'] != $AUTH_USER ||
		$_SERVER['PHP_AUTH_PW']   != $AUTH_PASS
	);
	if ($is_not_authenticated) {
		header('HTTP/1.1 401 Authorization Required');
		header('WWW-Authenticate: Basic realm="Access denied"');
		exit;
	}
}


require_auth();

$servername = "127.0.0.1";
$username = "root";
$password = "#fellow@web";
$dbname = "emails";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT id, email, create_date, ip FROM email";
$result = $conn->query($sql);
?>

<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>List!</title>
<link rel="stylesheet" crossorigin="anonymous" integrity="sha256-NqI559iHqiWe5VxDi9mXE8i83ghn8Ru8BINyiPN7lDg=" href="https://cdn.jsdelivr.net/foundation/6.2.4/foundation.min.css">


</head>
<body>

<table>
  <thead>
    <tr>
    <?php 
    if (isset($_GET['only'])) {
    	echo "<th>Email</th>";
    } else {
    ?>
      <th width="20">Id</th>
      <th>Email</th>
      <th width="150">Created (server time; current server time <?php echo date("Y-m-d H:i:s") ?> )</th>
      <th width="150">IP</th>
    <?php
	}
    ?>
    </tr>
  </thead>
  <tbody>
	<?php
	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
	    echo "<tr>";
	    if (isset($_GET['only'])) {
	    	echo "<td>" . htmlspecialchars($row["email"]) . "</td>";
	    }else {
	    	echo "<td>" . $row["id"]. "</td><td>" . htmlspecialchars($row["email"]) . "</td><td>" . $row["create_date"]. "</td><td>" . $row["ip"] . "</td>";	    	
	    }

	    echo "</tr>";
	    }
	} else {
	    echo "0 results";
	}
	$conn->close();

	?>

  </tbody>
</table>
</body>


