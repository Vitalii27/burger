<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: ".$name;

$result = mail('v.khlystun01@gmail.com', 'Тема', $message);
echo json_encode(array(
  'status' => $result
  
));