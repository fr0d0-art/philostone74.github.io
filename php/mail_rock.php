<?php
// несколько получателей
$to  = 'anigilator2017@yandex.ru';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['name'] . ' Сделал заказ на сайте' ' на ' . $_POST['square'] . ' квадратов Скалы <br />' 'Связяться с ним можно по номеру телефон - ' . $_POST['phone'] .
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Отправляем
mail($to, $subject, $message, $headers);
?>