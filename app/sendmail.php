<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exсeption;
use PHPMailer\PHPMailer\SMTP;
use Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
try {
$mail->CharSet = 'UTF-8';

$mail->isSMTP();

$mail->Host = 'mail.netangels.ru';
$mail->SMTPAuth = true;
$mail->Username = 'no-replay@woowholistic.ru';
$mail->Password = '9yXeMpmJoVndANW';
$mail->Port = 25 ;


$mail->setFrom('no-replay@woowholistic.ru');
$mail->addAddress('woowholistic@yandex.ru');

$mail->isHTML(true);

$mail->Subject = 'Форма обратной связи с Woow.holistic';

//Тело письма
if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['descr']))){
  $body.='<p><strong>Отзыв:</strong> '.$_POST['descr'].'</p>';
}

$mail->Body = $body;
$mail->AltBody = '';

//Отправялем
$mail->send();
$message='Отправлено.';
}
catch(Exception $e){
    $message='Произошла ошибка, попробуйте позже.';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
