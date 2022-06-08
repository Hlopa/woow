<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exсeption;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'woowholistic_reviews@mail.ru';
$mail->Password = 'rZGs4DiPfbmR2yvWMtNe';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('woowholistic_reviews@mail.ru');
$mail->addAddress('woowholistic_reviews@mail.ru');
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
if(!$mail->send()){
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
