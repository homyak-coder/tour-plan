<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if ($email) {
    if ($name) {
        $title = "Новый заказ Best Tour Plan";
        $body = "
                <h2>Поступил новый заказ</h2>
                <b>Имя:</b> $name<br>
                <b>Телефон:</b> $phone<br><br>
                <b>Почта:</b>$email<br>
                <b>Сообщение:</b><br>$message
                 ";
    } else {
        $title = "Новая подписка Best Tour Plan";
        $body = "
                <h2>Новая подписка</h2>
                <b>Почта:</b> $email<br>
                 ";
    }
} else {
    $title = "Новое обращение Best Tour Plan";
    $body = "
                <h2>Новое обращение</h2>
                <b>Имя:</b> $name<br>
                <b>Телефон:</b> $phone<br><br>
                <b>Сообщение:</b><br>$message
                 ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'denistourplan@gmail.com'; // Логин на почте
    $mail->Password   = 'YMMTQUPd'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('denistourplan@gmail.com', 'Денис Денисов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('dkhol@inbox.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html ');
