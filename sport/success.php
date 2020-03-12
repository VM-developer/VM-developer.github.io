<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$area = htmlspecialchars($_POST["area"]);
$modal = htmlspecialchars($_POST["target"]);
$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST[""]);

$refferer = getenv('HTTP_REFERER'); //адрес страницы с которой была отправлена форма
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "sportflexukr@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "Заявка";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Ваш заказ: $area<br>
Дата: $date<br>
Время: $time<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: http://sportflex.helensolar.ru <sportflexukr@gmail.com> \r\n Reply-To: http://sportflex.helensolar.ru \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Отправка письма пользователю

$tema = "Тема письма клиенту";
$message_to_myemail = "
Текст письма<br>

";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: http://sportflex.helensolar.ru <sportflexukr@gmail.com> \r\n Reply-To: http://sportflex.helensolar.ru \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$name</td> <td>$email</td> <td>$tel</td>   <td>$area</td> <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>