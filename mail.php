<?php

$mail = $_POST['mail'];

mail('liudas@sodonis.lt', '[TEASER] Pre Register', 'New email from: '.$mail);

?>