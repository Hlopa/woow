<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exeption;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';


  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  //Кому отправить
  $mail->addAddress('test@mail.ru');
  //Тема письма
  $mail->Subject = 'Форма обратной связи с Woow.holistic';

  
  //Тело письма
  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['descr']))){
    $body.='<p><strong>Отзыв:</strong>'.$_POST['descr'].'</p>';
  }

  $mail->Body = $body;

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

