<?php
$nameInput = $_POST['nameInput'];
$phoneInput = $_POST['phoneInput'];
$mailInput = $_POST['mailInput'];
$dateInput = $_POST['dateInput'];
$messInput = $_POST['messInput'];
$personInput = $_POST['personInput'];

$fromMail = 'dikador@mail.ru';
$fromName = 'https://dikador.github.io/';

$emailTo = 'dikador@mail.ru';
$subject = 'Форма на сайте';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

$body = "Получено письмо с сайта CasaSabine.ru \n\nИмя: $nameInput\n\nТелефон: $phoneInput \n\nE-mail: $mailInput\n\nДата: $dateInput\n\nКоличество человек: $personInput\n\nСообщение: $messInput";

$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );