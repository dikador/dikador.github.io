<?php

$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$fromMail = 'dikador@mail.ru';
$fromName = 'medgus.beget.tech';

$emailTo = 'medigus@mail.ru';
$subject = 'Форма на сайте';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

$innerB = "Получено письмо с сайта CasaSabine.ru \n\nИмя: $name\n\nТелефон: $tel \n\nE-mail: $email";

$mail = mail($emailTo, $subject, $innerB, $headers, '-f'. $fromMail );

header('Location: index.php');